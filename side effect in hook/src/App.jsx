import { useState,useEffect } from "react"
import axios from "axios"
function App() {
  const[image,setImage]=useState([]);
  useEffect(()=> {
    axios.get("https://dummyjson.com/products")
 
    .then((response) => { setImage(response.data.products) ;

    });
  
  },[]);

  return (
    <>
    {
      image.map((item)=>{
        return(
        <img
        key={item.id}
        src={item.thumbnail}
        alt="here was image"
        height="400px"
        width="400px"
        />
        
      )
})
}
    </>
  )
}
export default App