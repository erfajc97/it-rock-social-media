import type { Meta, StoryObj } from "@storybook/nextjs";
import { PostCard } from "@/src/components/organisms/PostCard";
import { Post } from "@/src/interfaces";
import { mockPosts } from "@/src/lib/mockData";

const meta = {
  title: "Organisms/PostCard",
  component: PostCard,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Card de publicación que muestra el contenido de un post, información del autor, acciones interactivas y sistema de comentarios. Integrado con Redux para gestión de estado.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    post: {
      description: "Objeto Post con toda la información de la publicación",
      control: "object",
    },
    currentUserId: {
      description:
        "ID del usuario actual para determinar si ha dado like o favorito",
      control: "text",
    },
    onLike: {
      description: "Callback que se ejecuta cuando se hace clic en like",
      action: "liked",
    },
    onComment: {
      description: "Callback que se ejecuta cuando se agrega un comentario",
      action: "commented",
    },
    onShare: {
      description: "Callback que se ejecuta cuando se comparte el post",
      action: "shared",
    },
    onFavorite: {
      description: "Callback que se ejecuta cuando se marca como favorito",
      action: "favorited",
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto p-4 bg-linear-to-br from-blue-50 to-purple-50 min-h-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PostCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Post de ejemplo con solo texto
const textOnlyPost: Post = {
  id: "story-1",
  userId: "1",
  userName: "Juan Pérez",
  userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
  content:
    "¡Qué hermoso día para compartir momentos especiales! 🌞✨\n\nEstoy muy contento de estar aquí compartiendo con todos ustedes.",
  createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  likes: 12,
  likedBy: ["2", "3"],
  shares: 3,
  isFavorite: false,
  favoritedBy: [],
  comments: [
    {
      id: "c1",
      postId: "story-1",
      userId: "2",
      userName: "María García",
      userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      content: "¡Totalmente de acuerdo! 😊",
      createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      likes: 5,
      likedBy: ["1"],
    },
  ],
};

// Post de ejemplo con imagen
const postWithImage: Post = {
  id: "story-2",
  userId: "2",
  userName: "María García",
  userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  content:
    'Acabo de terminar de leer un libro increíble. ¿Alguien más ha leído "El Programador Pragmático"? 📚',
  imageUrl:
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop",
  createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  likes: 28,
  likedBy: ["1", "3"],
  shares: 7,
  isFavorite: true,
  favoritedBy: ["1"],
  comments: [
    {
      id: "c2",
      postId: "story-2",
      userId: "3",
      userName: "Carlos López",
      userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      content: "¡Sí! Es uno de mis favoritos. Muy recomendado.",
      createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      likes: 8,
      likedBy: ["1", "2"],
    },
  ],
};

// Post sin interacciones
const emptyPost: Post = {
  id: "story-3",
  userId: "3",
  userName: "Carlos López",
  userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  content: "Mi primera publicación en IT Rock! 🎉",
  createdAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
  likes: 0,
  likedBy: [],
  shares: 0,
  isFavorite: false,
  favoritedBy: [],
  comments: [],
};

// Post con muchos comentarios
const postWithManyComments: Post = {
  id: "story-4",
  userId: "4",
  userName: "Ana Martínez",
  userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  content:
    "Compartiendo algunas fotos de mi viaje a la montaña. ¡La naturaleza es increíble! 🏔️",
  imageUrl:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
  createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  likes: 45,
  likedBy: ["1", "2", "3"],
  shares: 12,
  isFavorite: false,
  favoritedBy: [],
  comments: [
    {
      id: "c3",
      postId: "story-4",
      userId: "1",
      userName: "Juan Pérez",
      userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
      content: "¡Qué fotos tan hermosas! 😍",
      createdAt: new Date(Date.now() - 11 * 60 * 60 * 1000).toISOString(),
      likes: 3,
      likedBy: ["2"],
    },
    {
      id: "c4",
      postId: "story-4",
      userId: "2",
      userName: "María García",
      userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
      content: "Me encanta, quiero ir ahí algún día!",
      createdAt: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
      likes: 1,
      likedBy: [],
    },
    {
      id: "c5",
      postId: "story-4",
      userId: "3",
      userName: "Carlos López",
      userImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
      content: "Increíble vista, gracias por compartir!",
      createdAt: new Date(Date.now() - 9 * 60 * 60 * 1000).toISOString(),
      likes: 2,
      likedBy: ["1"],
    },
  ],
};

export const TextOnly: Story = {
  args: {
    post: textOnlyPost,
    currentUserId: "1",
    onLike: () => {},
    onComment: () => {},
    onShare: () => {},
    onFavorite: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "Post simple con solo texto, sin imagen. Incluye acciones básicas y comentarios.",
      },
    },
    reduxState: {
      auth: {
        user: {
          id: "1",
          name: "Juan Pérez",
          email: "juan@example.com",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
        },
        isAuthenticated: true,
        isLoading: false,
      },
      posts: {
        posts: [textOnlyPost],
        isLoading: false,
        error: null,
      },
    },
  },
};

export const WithImage: Story = {
  args: {
    post: postWithImage,
    currentUserId: "1",
    onLike: () => {},
    onComment: () => {},
    onShare: () => {},
    onFavorite: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "Post con imagen que muestra el contenido visual junto al texto. El post está marcado como favorito por el usuario actual.",
      },
    },
    reduxState: {
      auth: {
        user: {
          id: "1",
          name: "Juan Pérez",
          email: "juan@example.com",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
        },
        isAuthenticated: true,
        isLoading: false,
      },
      posts: {
        posts: [postWithImage],
        isLoading: false,
        error: null,
      },
    },
  },
};

export const EmptyPost: Story = {
  args: {
    post: emptyPost,
    currentUserId: "1",
    onLike: () => {},
    onComment: () => {},
    onShare: () => {},
    onFavorite: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "Post nuevo sin interacciones. Todas las métricas están en cero. Útil para mostrar el estado inicial de una publicación.",
      },
    },
    reduxState: {
      auth: {
        user: {
          id: "1",
          name: "Juan Pérez",
          email: "juan@example.com",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
        },
        isAuthenticated: true,
        isLoading: false,
      },
      posts: {
        posts: [emptyPost],
        isLoading: false,
        error: null,
      },
    },
  },
};

export const WithManyComments: Story = {
  args: {
    post: postWithManyComments,
    currentUserId: "1",
    onLike: () => {},
    onComment: () => {},
    onShare: () => {},
    onFavorite: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "Post popular con muchos comentarios, likes y shares. Muestra cómo se ve un post con alta interacción.",
      },
    },
    reduxState: {
      auth: {
        user: {
          id: "1",
          name: "Juan Pérez",
          email: "juan@example.com",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
        },
        isAuthenticated: true,
        isLoading: false,
      },
      posts: {
        posts: [postWithManyComments],
        isLoading: false,
        error: null,
      },
    },
  },
};

export const WithoutUser: Story = {
  args: {
    post: textOnlyPost,
    currentUserId: undefined,
    onLike: () => {},
    onComment: () => {},
    onShare: () => {},
    onFavorite: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "Post visto por un usuario no autenticado. No se puede dar like, comentar o marcar como favorito, pero se puede ver el contenido.",
      },
    },
    reduxState: {
      auth: {
        user: null,
        isAuthenticated: false,
        isLoading: false,
      },
      posts: {
        posts: [textOnlyPost],
        isLoading: false,
        error: null,
      },
    },
  },
};

export const AlreadyLikedAndFavorited: Story = {
  args: {
    post: {
      ...postWithImage,
      likedBy: ["1", "2", "3"],
      favoritedBy: ["1"],
    },
    currentUserId: "1",
    onLike: () => {},
    onComment: () => {},
    onShare: () => {},
    onFavorite: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "Post que ya ha sido marcado como favorito y dado like por el usuario actual. Los botones muestran el estado activo.",
      },
    },
    reduxState: {
      auth: {
        user: {
          id: "1",
          name: "Juan Pérez",
          email: "juan@example.com",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
        },
        isAuthenticated: true,
        isLoading: false,
      },
      posts: {
        posts: [postWithImage],
        isLoading: false,
        error: null,
      },
    },
  },
};

export const FromMockData: Story = {
  args: {
    post: mockPosts[0],
    currentUserId: "1",
    onLike: () => {},
    onComment: () => {},
    onShare: () => {},
    onFavorite: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "Post usando datos del mockData del proyecto. Muestra cómo se ve el componente con datos reales de ejemplo.",
      },
    },
    reduxState: {
      auth: {
        user: {
          id: "1",
          name: "Juan Pérez",
          email: "juan@example.com",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Juan",
        },
        isAuthenticated: true,
        isLoading: false,
      },
      posts: {
        posts: mockPosts,
        isLoading: false,
        error: null,
      },
    },
  },
};
