import { useQuery } from "@tanstack/react-query";
import { getProductsAction } from "../actions/get-product.action";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProductsAction,
  });
};
