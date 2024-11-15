import httpPrivate from "@/utils/httpPrivate";
import { useQuery } from "@tanstack/react-query";

export const useProduct = (id: any) => {
  const { isLoading, data: product } = useQuery({
    queryKey: ["product"],
    queryFn: () => httpPrivate("GET", `api/product/products/${id}`),
    enabled: !!id,
  });

  return { isLoading, product };
};
