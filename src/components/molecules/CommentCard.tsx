"use client";

import { CommentCardProps } from "@/src/interfaces";
import { Avatar } from "@/src/components/atoms/Avatar";
import { IconButton } from "@/src/components/atoms/IconButton";
import { formatDate } from "@/src/lib/utils";
import { HeartIcon } from "@/src/assets/icons/HeartIcon";

export function CommentCard({
  comment,
  currentUserId,
  onLike,
}: CommentCardProps) {
  const isLiked = currentUserId
    ? comment.likedBy.includes(currentUserId)
    : false;

  return (
    <div className="flex gap-3 p-3 hover:bg-gray-50/50 rounded-lg transition-colors border-b border-gray-200/50 last:border-b-0">
      <Avatar src={comment.userImage} alt={comment.userName} size="sm" />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <p className="font-semibold text-sm text-gray-900">
              {comment.userName}
            </p>
            <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-xs text-gray-500">
                {formatDate(comment.createdAt)}
              </span>
              <IconButton
                icon={<HeartIcon className="w-4 h-4" isFilled={isLiked} />}
                label={comment.likes > 0 ? comment.likes.toString() : undefined}
                active={isLiked}
                onClick={() => onLike?.(comment.id)}
                className={`h-6 px-2 text-xs ${
                  isLiked
                    ? "bg-transparent hover:bg-transparent text-red-600"
                    : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
