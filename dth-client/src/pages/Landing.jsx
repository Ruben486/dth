import Navbar from "../Componentes/Navbar";
import { Outlet } from "react-router-dom";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getProductos } from "../api/productosAxios";
import Hero from "../Componentes/Hero";
import Spinner from "../UI/Spinner";

const Landing = () => {
  const queryClient = useQueryClient();

   const prefetchProductos = async () => { 
    try {
      const  data  = await queryClient.fetchQuery({
        queryKey: ["productos"],
        queryFn: getProductos,
        staleTime: 80000,
        keepPreviusData: true,
      });
      console.log(data)
    } catch (error) {
      console.log(error)
    }
      
  };
  prefetchProductos();
  


  /* const { isPending, data, isError, isSuccess, error } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
    staleTime: 60000,
    keepPreviusData: true,
  }); */
  
  /* if (isPending) {
    return (
      <Spinner />
    )
  } */
  
  return (
    <main>
      <Navbar />
      <Hero />
      <Outlet />
    </main>
  );
};

export default Landing;
