"use client";

import Image from "next/image";
import { PostCardProps } from "@/src/interfaces";
import { Avatar } from "@/src/components/atoms/Avatar";
import { CommentCard } from "@/src/components/molecules/CommentCard";
import { PostActions } from "@/src/components/molecules/PostActions";
import { Button } from "@/src/components/atoms/Button";
import { formatDate } from "@/src/lib/utils";
import { usePostCard } from "@/src/hooks/usePostCard";

export function PostCard({
  post,
  currentUserId,
  onLike,
  onShare,
  onFavorite,
}: PostCardProps) {
  const {
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
  } = usePostCard({ post, currentUserId, onLike, onShare, onFavorite });

  return (
    <article className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 p-4 md:p-6">
      <div className="flex items-start gap-3 mb-4">
        <Avatar src={post.userImage} alt={post.userName} size="md" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">{post.userName}</h3>
              <p className="text-sm text-gray-500">
                {formatDate(post.createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
      </div>

      {post.imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={`Publicación de ${post.userName}`}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      )}

      <PostActions
        likes={post.likes}
        comments={post.comments.length}
        shares={post.shares}
        isLiked={isLiked}
        isFavorited={isFavorited}
        onLike={handleLike}
        onComment={handleComment}
        onShare={handleShare}
        onFavorite={handleFavorite}
      />

      {showComments && (
        <div className="mt-4 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="space-y-2">
            {post.comments.map((comment, index) => (
              <div
                key={comment.id}
                className="animate-in fade-in slide-in-from-left-2"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CommentCard
                  comment={comment}
                  currentUserId={currentUserId}
                  onLike={handleLikeComment}
                />
              </div>
            ))}
          </div>

          {user && (
            <div className="flex gap-2 pt-3 border-t border-gray-200">
              <Avatar src={user.image} alt={user.name} size="sm" />
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  placeholder="Escribe un comentario..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyUp={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmitComment();
                    }
                  }}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder:text-gray-500 bg-white"
                />
                <Button
                  onClick={handleSubmitComment}
                  disabled={!commentText.trim() || isSubmittingComment}
                  variant="primary"
                >
                  Publicar
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}
