"use client";

import { Avatar } from "@/src/components/atoms/Avatar";
import { Input } from "@/src/components/atoms/Input";
import { Button } from "@/src/components/atoms/Button";
import { useCreatePost } from "@/src/hooks/useCreatePost";

export function CreatePost() {
  const {
    user,
    content,
    imageUrl,
    isSubmitting,
    handleSubmit,
    setContent,
    setImageUrl,
  } = useCreatePost();

  if (!user) return null;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 p-4 md:p-6 mb-6">
      <div className="flex gap-3 mb-4">
        <Avatar src={user.image} alt={user.name} size="md" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{user.name}</h3>
          <p className="text-sm text-gray-500">¿Qué estás pensando?</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe algo..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900 placeholder:text-gray-500 bg-white"
        />

        <Input
          type="url"
          placeholder="URL de imagen (opcional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={!content.trim() || isSubmitting}>
            {isSubmitting ? "Publicando..." : "Publicar"}
          </Button>
        </div>
      </form>
    </div>
  );
}
