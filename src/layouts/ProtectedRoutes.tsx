import { useUser } from "@/features/authentication/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

function ProtectedRoutes({ children }: any) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.push("/");
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) return null;
  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
