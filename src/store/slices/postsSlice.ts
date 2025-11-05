import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsState, Post, Comment } from "@/src/interfaces";

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.unshift(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    toggleLikePost: (
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) => {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (post) {
        const isLiked = post.likedBy.includes(action.payload.userId);
        if (isLiked) {
          post.likes--;
          post.likedBy = post.likedBy.filter(
            (id) => id !== action.payload.userId
          );
        } else {
          post.likes++;
          post.likedBy.push(action.payload.userId);
        }
      }
    },
    toggleFavoritePost: (
      state,
      action: PayloadAction<{ postId: string; userId: string }>
    ) => {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (post) {
        const isFavorited = post.favoritedBy.includes(action.payload.userId);
        if (isFavorited) {
          post.isFavorite = false;
          post.favoritedBy = post.favoritedBy.filter(
            (id) => id !== action.payload.userId
          );
        } else {
          post.isFavorite = true;
          post.favoritedBy.push(action.payload.userId);
        }
      }
    },
    incrementSharePost: (state, action: PayloadAction<string>) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        post.shares++;
      }
    },
    addComment: (
      state,
      action: PayloadAction<{ postId: string; comment: Comment }>
    ) => {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (post) {
        post.comments.push(action.payload.comment);
      }
    },
    toggleLikeComment: (
      state,
      action: PayloadAction<{
        postId: string;
        commentId: string;
        userId: string;
      }>
    ) => {
      const post = state.posts.find((p) => p.id === action.payload.postId);
      if (post) {
        const comment = post.comments.find(
          (c) => c.id === action.payload.commentId
        );
        if (comment) {
          const isLiked = comment.likedBy.includes(action.payload.userId);
          if (isLiked) {
            comment.likes--;
            comment.likedBy = comment.likedBy.filter(
              (id) => id !== action.payload.userId
            );
          } else {
            comment.likes++;
            comment.likedBy.push(action.payload.userId);
          }
        }
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPosts,
  addPost,
  updatePost,
  toggleLikePost,
  toggleFavoritePost,
  incrementSharePost,
  addComment,
  toggleLikeComment,
  setLoading,
  setError,
} = postsSlice.actions;
export default postsSlice.reducer;
