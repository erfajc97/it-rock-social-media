import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/src/store/hooks";
import { setUser } from "@/src/store/slices/authSlice";
import { User } from "@/src/interfaces";

const loginSchema = z.object({
  email: z.string().email("Email inválido").min(1, "Email es requerido"),
  password: z.string().min(1, "Contraseña es requerida"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { update } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email o contraseña incorrectos");
        setIsLoading(false);
        return;
      }

      if (result?.ok) {
        const user: User = {
          id: "1",
          name: data.email.split("@")[0],
          email: data.email,
          image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data.email}`,
        };

        dispatch(setUser(user));
        await update();
        await new Promise((resolve) => setTimeout(resolve, 100));

        router.push("/feed");
        router.refresh();
      }
    } catch {
      setError("Error al iniciar sesión. Por favor, intenta de nuevo.");
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await signIn("google", { callbackUrl: "/feed" });
    } catch {
      setError("Error al iniciar sesión con Google.");
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isLoading,
    error,
    onSubmit,
    handleGoogleSignIn,
  };
}

