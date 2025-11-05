"use client";

import { IconButton } from "@/src/components/atoms/IconButton";
import { HeartIcon } from "@/src/assets/icons/HeartIcon";
import { CommentIcon } from "@/src/assets/icons/CommentIcon";
import { ShareIcon } from "@/src/assets/icons/ShareIcon";
import { StarIcon } from "@/src/assets/icons/StarIcon";

interface PostActionsProps {
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  isFavorited: boolean;
  onLike: () => void;
  onComment: () => void;
  onShare: () => void;
  onFavorite: () => void;
}

export function PostActions({
  likes,
  comments,
  shares,
  isLiked,
  isFavorited,
  onLike,
  onComment,
  onShare,
  onFavorite,
}: PostActionsProps) {
  return (
    <div className="flex items-center justify-between pt-3 border-t border-gray-200">
      <IconButton
        icon={<HeartIcon isFilled={isLiked} />}
        label={likes > 0 ? likes.toString() : "Me gusta"}
        active={isLiked}
        onClick={onLike}
      />
      <IconButton
        icon={<CommentIcon />}
        label={comments > 0 ? comments.toString() : "Comentar"}
        onClick={onComment}
      />
      <IconButton
        icon={<ShareIcon />}
        label={shares > 0 ? shares.toString() : "Compartir"}
        onClick={onShare}
      />
      <IconButton
        icon={<StarIcon isFilled={isFavorited} />}
        label={isFavorited ? "Favorito" : "Favorito"}
        active={isFavorited}
        onClick={onFavorite}
      />
    </div>
  );
}
