import type { Preview, Decorator } from "@storybook/react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/store/slices/authSlice";
import postsReducer from "../src/store/slices/postsSlice";
import "../app/globals.css";
import React from "react";

// Mock store para Storybook
const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      auth: authReducer,
      posts: postsReducer,
    },
    preloadedState: initialState,
  });
};

// Decorador para Redux Provider
export const withRedux: Decorator = (Story, context) => {
  const mockState = context.parameters?.reduxState || {
    auth: {
      user: null,
      isAuthenticated: false,
      isLoading: false,
    },
    posts: {
      posts: [],
      isLoading: false,
      error: null,
    },
  };

  const store = createMockStore(mockState);

  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};

// Decorador para NextAuth SessionProvider
export const withNextAuth: Decorator = (Story, context) => {
  const mockSession = context.parameters?.nextAuth?.session || null;

  return (
    <SessionProvider session={mockSession}>
      <Story />
    </SessionProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
  decorators: [withRedux, withNextAuth],
};

export default preview;
