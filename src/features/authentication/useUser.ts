import httpPrivate from "@/utils/httpPrivate";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => httpPrivate("GET", "api/user/profile"),
  });

  return { isLoading, user, isAuthenticated: !!user };
};
