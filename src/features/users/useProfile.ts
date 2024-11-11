import httpPrivate from "@/utils/httpPrivate";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["profile"],
    queryFn: () => httpPrivate("GET", "api/user/profile"),
  });

  return { isLoading, user };
};
