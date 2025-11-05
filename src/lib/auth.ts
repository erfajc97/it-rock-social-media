import { redirect } from "next/navigation";
import { auth } from "@/app/api/auth/[...nextauth]/route";

export async function getSession() {
  try {
    const session = await auth();
    return session;
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return session;
}

export async function requireGuest() {
  const session = await getSession();
  if (session) {
    redirect("/feed");
  }
}
