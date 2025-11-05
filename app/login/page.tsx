import { LoginForm } from "@/src/components/molecules/LoginForm";
import { AnimatedBackground } from "@/src/components/atoms/AnimatedBackground";

export default function LoginPage() {
  return (
    <AnimatedBackground className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-10 border-2 border-white/50">
          {/* Logo y título destacado */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
              <span className="text-blue-600 drop-shadow-lg">IT</span>{" "}
              <span className="text-purple-600 drop-shadow-lg">Rock</span>
            </h1>
            <p className="text-lg text-gray-800 font-semibold mb-1 mt-2">
              Bienvenido
            </p>
            <p className="text-sm text-gray-600 font-medium">
              La red social IT ROCK challenge
            </p>
          </div>

          <LoginForm />

          <p className="mt-6 text-center text-sm text-gray-600">
            Para probar, usa cualquier email y contraseña:{" "}
            <strong className="text-blue-600 font-bold">123456</strong>
          </p>
        </div>
      </div>
    </AnimatedBackground>
  );
}
