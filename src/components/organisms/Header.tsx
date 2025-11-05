"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/src/store/hooks";
import { logout } from "@/src/store/slices/authSlice";
import { Avatar } from "@/src/components/atoms/Avatar";
import { Button } from "@/src/components/atoms/Button";

export function Header() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await signOut({ redirect: false });
    dispatch(logout());
    router.push("/login");
  };

  if (!user) return null;

  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 fixed top-0 left-0 right-0 z-20">
      <div className="max-w-4xl mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
            <span className="text-blue-400">IT</span>{" "}
            <span className="text-purple-400">Rock</span>
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Avatar src={user.image} alt={user.name} size="sm" />
              <span className="hidden md:block text-sm font-medium text-white drop-shadow-md">
                {user.name}
              </span>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Salir
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
