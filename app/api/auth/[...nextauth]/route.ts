import NextAuth from "next-auth";
import { authOptions } from "@/src/lib/authOptions";

// NextAuth v5 beta - extraer handlers y funciones correctamente
const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

// Exportar handlers para las rutas
export const { GET, POST } = handlers;

// Exportar auth, signIn, signOut para usar en el servidor
export { auth, signIn, signOut };
