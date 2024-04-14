import { useEffect, useState } from "react";

const url = 'http://localhost:3000/producto';

const FetchData = () => {
const [data, setData] = useState(null)

useEffect( () => {
  fetch(url)
  .then(response => response.json())
  .then(data => { 
    console.log(data)
    setData(data)
  })
  .catch((err) => {console.log(err)})
},[]);  

return (
<div>FetchData</div>
)
}
export default FetchData;