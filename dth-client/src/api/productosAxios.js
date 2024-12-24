import { API_URL } from "../config/server.js";
import axios from "axios";

/* const productosApi = axios.create({
  url: API_URL + "/productos/",
}) */
const url = API_URL + "/productos/";
// const url = "https://dth.onrender.com"  + "/productos/";
// const url = "http://localhost:3000" + "/productos/";
export const getProductos = async () => {
  try {
    const { data} = await axios.get(url);
    return data
  } catch (error) {
    console.error(error);
  }
};

export const getProductoId = async (id) => {
  try {
    console.log(id)
    const { data } = await axios.get(url + id);
    return data
  } catch (error) {
    console.log(error);
  }
};

/* axios
    .get(url)
    .then((response) => {
      // Data retrieval and processing
      console.log(response.data);
      
      return response.data
    })
    .catch((error) => {
      // If the query fails, an error will be displayed on the terminal.
      console.error(error);
    }); */
