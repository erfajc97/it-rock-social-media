// User Interfaces
export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  provider?: string;
}

// Post Interfaces
export interface Comment {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  userImage?: string;
  content: string;
  createdAt: string;
  likes: number;
  likedBy: string[];
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userImage?: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  likes: number;
  likedBy: string[];
  comments: Comment[];
  shares: number;
  isFavorite: boolean;
  favoritedBy: string[];
}

// Auth Interfaces
export interface LoginFormData {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Post State Interfaces
export interface PostsState {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

// Component Props Interfaces
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "outline";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
  name?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

export interface PostCardProps {
  post: Post;
  currentUserId?: string;
  onLike?: (postId: string) => void;
  onComment?: (postId: string, content: string) => void;
  onShare?: (postId: string) => void;
  onFavorite?: (postId: string) => void;
}

export interface CommentCardProps {
  comment: Comment;
  currentUserId?: string;
  onLike?: (commentId: string) => void;
}
