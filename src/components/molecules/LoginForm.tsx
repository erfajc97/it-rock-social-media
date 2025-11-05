"use client";

import { Button } from "@/src/components/atoms/Button";
import { Input } from "@/src/components/atoms/Input";
import { useLoginForm } from "@/src/hooks/useLoginForm";
import { GoogleIcon } from "@/src/assets/icons/GoogleIcon";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    errors,
    isLoading,
    error,
    onSubmit,
    handleGoogleSignIn,
  } = useLoginForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <Input
        label="Email"
        type="email"
        placeholder="tu@email.com"
        {...register("email")}
        error={errors.email?.message}
        required
      />

      <Input
        label="Contraseña"
        type="password"
        placeholder=""
        {...register("password")}
        error={errors.password?.message}
        required
      />

      <Button type="submit" fullWidth disabled={isLoading}>
        {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
      </Button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">O continúa con</span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        fullWidth
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        className="flex items-center justify-center gap-2"
      >
        <GoogleIcon />
        Continuar con Google
      </Button>
    </form>
  );
}
