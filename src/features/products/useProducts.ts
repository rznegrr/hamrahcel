import { products as productsApi } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (page: any) => {
  const { isLoading, data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => productsApi(page),
    enabled: !!page,
  });
  return { isLoading, products };
};
