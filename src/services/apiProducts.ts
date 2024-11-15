import http from "@/utils/http";

export const products = async (page = 1) => {
  const res = await http({
    method: "GET",
    url: `api/product/products/?page=${page}`,
    withSlash: false,
  });
  const data = await res.json();
  return data;
};
