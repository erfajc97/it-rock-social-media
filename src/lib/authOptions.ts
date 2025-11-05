import type { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const hasGoogleCredentials =
  process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET;

export const authOptions: NextAuthConfig = {
  providers: [
    ...(hasGoogleCredentials
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
          }),
        ]
      : []),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const validPassword = "123456"; // Password por defecto para demo

        if (
          typeof credentials.password === "string" &&
          credentials.password === validPassword &&
          typeof credentials.email === "string"
        ) {
          return {
            id: "1",
            name: credentials.email.split("@")[0],
            email: credentials.email,
            image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${credentials.email}`,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user && token) {
        const user = session.user as typeof session.user & { id?: string };
        user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "your-secret-key-change-in-production",
  trustHost: true,
  debug: process.env.NODE_ENV === "development",
};
