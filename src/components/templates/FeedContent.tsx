"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Post } from "@/src/interfaces";
import { useAppSelector, useAppDispatch } from "@/src/store/hooks";
import { setPosts } from "@/src/store/slices/postsSlice";
import { Header } from "@/src/components/organisms/Header";
import { CreatePost } from "@/src/components/organisms/CreatePost";
import { PostCard } from "@/src/components/organisms/PostCard";
import { AnimatedBackground } from "@/src/components/atoms/AnimatedBackground";

interface FeedContentProps {
  initialPosts: Post[];
}

export function FeedContent({ initialPosts }: FeedContentProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data: session, status } = useSession();
  const posts = useAppSelector((state) => state.posts.posts);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (initialPosts && initialPosts.length > 0 && posts.length === 0) {
      dispatch(setPosts(initialPosts));
    }
  }, [dispatch, initialPosts, posts.length]);

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (status === "unauthenticated" && !session && !user) {
      router.push("/login");
    }
  }, [status, session, user, router]);

  const displayPosts = posts.length > 0 ? posts : initialPosts;

  if (status === "loading") {
    return (
      <AnimatedBackground className="min-h-screen flex items-center justify-center">
        <div className="text-white">Cargando...</div>
      </AnimatedBackground>
    );
  }

  if (status === "unauthenticated" && !session && !user) {
    return null;
  }

  if (!user && session) {
    return (
      <AnimatedBackground className="min-h-screen flex items-center justify-center">
        <div className="text-white">Cargando...</div>
      </AnimatedBackground>
    );
  }

  return (
    <AnimatedBackground className="min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-6 md:py-8 pt-20 md:pt-24">
        <CreatePost />
        <div className="space-y-6">
          {displayPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-white text-lg">No hay publicaciones aún.</p>
              <p className="text-white/80 text-sm mt-2">
                Sé el primero en publicar algo!
              </p>
            </div>
          ) : (
            displayPosts.map((post) => (
              <PostCard key={post.id} post={post} currentUserId={user?.id} />
            ))
          )}
        </div>
      </main>
    </AnimatedBackground>
  );
}
