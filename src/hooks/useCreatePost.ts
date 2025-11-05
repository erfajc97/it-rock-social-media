import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/src/store/hooks";
import { addPost } from "@/src/store/slices/postsSlice";
import { Post } from "@/src/interfaces";

export function useCreatePost() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !user) return;

    setIsSubmitting(true);

    const newPost: Post = {
      id: `post-${Date.now()}`,
      userId: user.id,
      userName: user.name,
      userImage: user.image,
      content: content.trim(),
      imageUrl: imageUrl.trim() || undefined,
      createdAt: new Date().toISOString(),
      likes: 0,
      likedBy: [],
      shares: 0,
      isFavorite: false,
      favoritedBy: [],
      comments: [],
    };

    dispatch(addPost(newPost));
    setContent("");
    setImageUrl("");
    setIsSubmitting(false);
  };

  return {
    user,
    content,
    imageUrl,
    isSubmitting,
    handleSubmit,
    setContent,
    setImageUrl,
  };
}
