import React, { useState } from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter} from "react-router-dom";
import Rout from './components/Rout';
import Footer from './components/Footer';
import Homeproduct from './components/Home_product';
//import ProductList from './components/ProductList';
//import Modal from './components/Modal';

 function App() {
  const [shop,setShop]=useState(Homeproduct)
  const [search,setSearch]=useState()
  const [cart,setCart]=useState([])
 
  const Filter=(x)=>
  {
    const catefilter=Homeproduct.filter((product)=>
    {
      return product.cat === x
    }
    )
    setShop(catefilter)
  }
  const allcatefilter=()=>
  {
      setShop(Homeproduct)
  }


  const searchlength =(search || []).length ===0
  const searchproduct=()=>{
  if(searchlength)
  {
    alert("please search something others")
    setShop(Homeproduct)
  }
  else
  {
   
      
          const searchfilter=Homeproduct.filter((x)=>
          {
              return x.cat === search
          })
          setShop(searchfilter)
      
  }
  }

  
  const addtocart=(product)=>
  {
    const exist = cart.find((x)=>
      {
          return x.id === product.id
      })
      if(exist)
      {
        alert("this product is allready added in cart")
      }
      else
      {
        setCart([...cart,{...product, qty:1}])
        alert("Added to Cart")
      }
     
      console.log(cart)
  }




  return (
    <> 
    
    <BrowserRouter>
    <Navbar search={search} setSearch={setSearch} searchproduct={searchproduct}/>
    <Rout shop={shop} Filter={Filter} setCart={setCart} allcatefilter={allcatefilter} cart={cart} addtocart={addtocart} />
    <Footer/>
    </BrowserRouter>
  
    

    
    </>
    
  );
}
export default App;