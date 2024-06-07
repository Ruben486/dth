import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductos, getProductoId } from "../api/productosAxios";

export const useProductos = () => {
  return useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
    staleTime: 60000,
    keepPreviusData: true,
  });
};

export const usetProductoId = (id) => {
  return useQuery({
    queryKey:["producto", id],
    queryFn: () => getProductoId(id),
    staleTime: 60000,
    keepPreviusData: true,
    enabled: !!id,
  }) 
};


export const useprefetchProductos = (id) => {
  const queryClient  = useQueryClient();
  return queryClient.prefetchQuery({
    queryKey: ["producto", id],
    queryFn: () => getProductoId(id),
    staleTime: 60000,
    keepPreviusData: true,
  });
};
