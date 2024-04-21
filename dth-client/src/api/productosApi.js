import { API_URL } from "../config/server.js";
const url = API_URL + '/productos/';

export const getProductos = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error);
  }
};

export const getProducto = async (id) => {
  try {
    const reqProducto = url + id
    console.log(reqProducto)
    const response = await fetch(url + id) 
    const data = await response.json()
    
    return data
  } catch (error) {
    console.log(error)
  }
};

