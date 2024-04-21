import Navbar from "../Componentes/Navbar";
import { Outlet } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { getProductos } from "../api/productosAxios";
import Hero from "../Componentes/Hero";

const Landing = () => {
  const queryClient = useQueryClient();

  const prefetchProductos = async () => { 
      await queryClient.prefetchQuery({
      queryKey: ["productos"],
      queryFn: getProductos,
      staleTime: 80000,
      keepPreviusData: true,
    });
  };
  prefetchProductos();
  
  return (
    <main>
      <Navbar />
      <Hero />
      <Outlet />
    </main>
  );
};

export default Landing;
