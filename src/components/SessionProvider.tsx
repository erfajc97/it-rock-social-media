"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useAppDispatch } from "@/src/store/hooks";
import { setUser } from "@/src/store/slices/authSlice";
import { User } from "@/src/interfaces";

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (session?.user) {
      const user: User = {
        id: session.user.id || session.user.email || "1",
        name:
          session.user.name || session.user.email?.split("@")[0] || "Usuario",
        email: session.user.email || "",
        image: session.user.image || undefined,
      };
      dispatch(setUser(user));
    } else if (status === "unauthenticated") {
      dispatch(setUser(null));
    }
  }, [session, status, dispatch]);

  return <>{children}</>;
}
