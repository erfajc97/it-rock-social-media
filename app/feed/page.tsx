import { FeedContent } from "@/src/components/templates/FeedContent";
import { mockPosts } from "@/src/lib/mockData";

export default function FeedPage() {
  // SSR: Los posts se cargan en el servidor
  const initialPosts = mockPosts;

  // La protección de ruta se maneja en el cliente a través de FeedContent
  return <FeedContent initialPosts={initialPosts} />;
}

