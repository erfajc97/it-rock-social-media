"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { store, persistor } from "@/src/store/store";
import { SessionProvider } from "./SessionProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextAuthSessionProvider refetchInterval={0} refetchOnWindowFocus={false}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider>{children}</SessionProvider>
        </PersistGate>
      </Provider>
    </NextAuthSessionProvider>
  );
}
