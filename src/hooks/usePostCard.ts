import { useState } from "react";
import { PostCardProps, Comment } from "@/src/interfaces";
import { useAppSelector, useAppDispatch } from "@/src/store/hooks";
import {
  toggleLikePost,
  toggleFavoritePost,
  incrementSharePost,
  addComment,
  toggleLikeComment,
} from "@/src/store/slices/postsSlice";

export function usePostCard({
  post,
  currentUserId,
  onLike,
  onShare,
  onFavorite,
}: PostCardProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);

  const isLiked = currentUserId ? post.likedBy.includes(currentUserId) : false;
  const isFavorited = currentUserId
    ? post.favoritedBy.includes(currentUserId)
    : false;

  const handleLike = () => {
    if (currentUserId) {
      dispatch(toggleLikePost({ postId: post.id, userId: currentUserId }));
    }
    onLike?.(post.id);
  };

  const handleFavorite = () => {
    if (currentUserId) {
      dispatch(toggleFavoritePost({ postId: post.id, userId: currentUserId }));
    }
    onFavorite?.(post.id);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Publicación de ${post.userName}`,
        text: post.content,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
    dispatch(incrementSharePost(post.id));
    onShare?.(post.id);
  };

  const handleComment = () => {
    setShowComments(!showComments);
  };

  const handleSubmitComment = async () => {
    if (!commentText.trim() || !user) return;

    setIsSubmittingComment(true);

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      postId: post.id,
      userId: user.id,
      userName: user.name,
      userImage: user.image,
      content: commentText.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
      likedBy: [],
    };

    dispatch(addComment({ postId: post.id, comment: newComment }));
    setCommentText("");
    setIsSubmittingComment(false);
    setShowComments(true);
  };

  const handleLikeComment = (commentId: string) => {
    if (currentUserId) {
      dispatch(
        toggleLikeComment({
          postId: post.id,
          commentId,
          userId: currentUserId,
        })
      );
    }
  };

  return {
    user,
    showComments,
    commentText,
    isSubmittingComment,
    isLiked,
    isFavorited,
    handleLike,
    handleFavorite,
    handleShare,
    handleComment,
    handleSubmitComment,
    handleLikeComment,
    setCommentText,
  };
}

