import { API_URL } from "../config/server.js";
const url = API_URL + '/productos/';
console.log(url)
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
    console.log(url + id)
    const response = await fetch(url + id) 
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
};

