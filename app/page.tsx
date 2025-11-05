import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirigir a login por defecto
  // La autenticación se maneja en el cliente
  redirect("/login");
}
