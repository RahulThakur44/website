import React, { useEffect } from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import Homeproduct from './Home_product'
import { AiFillEye,AiFillHeart,AiOutlineShoppingCart } from "react-icons/ai";
const Home = ({addtocart}) => {
  const [newProduct,setNewProduct]=useState([])
  const [featuredProduct,setFeaturedProduct]=useState([])
  const [topProduct,setTopProduct]=useState([])
  const[trendingProduct,setTrendingProduct]=useState(Homeproduct)
  const filtercate =(x)=>
  {
    const filterproduct = Homeproduct.filter((curElm)=>{
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  const allTrendingProduct=()=>
  {
    setTrendingProduct(Homeproduct)
  }
  useEffect(()=>
  {

    productcategory()
  })
  const productcategory=()=>{
    const newcategory=Homeproduct.filter((x)=>
    {
      return x.type==='new'
    })
    setNewProduct(newcategory)
    const featuredcategory=Homeproduct.filter((x)=>
      {
        return x.type==='featured'
    })
    setFeaturedProduct(featuredcategory)

    const topcategory=Homeproduct.filter((x)=>
    {
        return x.type==='top'
    })
    setTopProduct(topcategory)
    
  }
  return (
    <>
      <div className='home'>
          <div className='top_banner'>
            <div className='contant'>
                <h3>Apple Watch</h3>
                <p>30% off at your first order</p>
                <Link to='/shop' className='link'>Shop Now</Link>
            </div>
          </div>
          <div className='trending'>
            <div className='container'>
              <div className='left_box'>
                <div className='header'>
                  <div className='heading'>
                    <h2 onClick={()=> allTrendingProduct()}>trending product</h2>
                  </div>
                  <div className='cate'>
                    <h3 onClick={()=> filtercate('new')}>New</h3>
                    <h3 onClick={()=> filtercate('featured')}>Featured</h3>
                    <h3 onClick={()=> filtercate('top')}>top selling</h3>
                  </div>
                </div>
                <div className='product'>
                  <div className='left_container'>
                    {
                      trendingProduct.map((curElm)=>{
                        return(
                          <>
                          <div className='box'>
                            <div className='img_box'>
                              <img src={curElm.image} alt="iimage"></img>
                              <div className='icon'>
                                <div className='icon_box'>
                                <AiFillEye />
                                </div>
                                <div className='icon_box'>
                                <AiFillHeart />
                                </div>
                              </div>
                            </div>
                            <div className='info'>
                              <h3>{curElm.Name}</h3>
                              <p>${curElm.price}</p>
                              <button className='btn' onClick={()=> addtocart(curElm)}>Add to Cart</button>
                            </div>
                          </div>
                          </>
                        )
                      })
                    }
                  </div>
                  <button className='btn1'>Show more</button>
                </div>
              </div>
                <div className='right_box'>
                  <div className='container'>
                    <div className='testimonial'>
                      <div className='head'>
                        <h3>our testimonial</h3>
                      </div>
                      <div className='detail'>
                        <div className='img_box'>
                          <img src="image/rahul.avif" alt='testmonial'></img>
                        </div>
                        <div className='info'>
                          <h3> rahul thakur</h3>
                          <h4> tybscit project</h4>
                          <p> e-commerce website for electronic product</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className='banners'>
            <div className='container'>
              <div className='left_box'>
                <div className='box'>
                  <img src='image/wires.webp' alt="jblimage"></img>
                </div>
                <div className='box'>
                  <img src='image/bigsale.jpg' alt="bigsale"></img>
                </div>
              </div>
              <div className='right_box'>
                <div  className='top'>
                    <img src="image/speaker4.jpg" alt="speaker3"></img>
                    <div className='top1'>
                    <img src="image/speaker4.webp" alt="speaker3"></img>
                    </div>
                </div>
                <div className='bottom'>
                  <img src='image/keyboard1.webp' alt="keyboard"></img>
                </div>
              </div>
            </div>
          </div>
          <div className='product_type'>
            <div className='container'>
              <div className="box">
              <div className="header">
                <h2>New product</h2>
              </div>
              {
                  newProduct.map((curElm)=>
                    {
                    return(
                        <>
                        <div className="productbox">
                          <div className="img_box">
                            <img src={curElm.image} alt=""></img>
                          </div>
                          <div className="detail">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <div className="icon">
                              <button> <AiFillEye /></button>
                              <button><AiFillHeart /></button>
                              <button onClick={()=> addtocart(curElm)}><AiOutlineShoppingCart /></button>
                            </div>
                          </div>
                        </div>
                        
                        </>

                    )
                  })
              }
                </div>
                <div className="box">
              <div className="header">
                <h2>Featured product</h2>
              </div>
              {
                  featuredProduct.map((curElm)=>
                    {
                    return(
                        <>
                        <div className="productbox">
                          <div className="img_box">
                            <img src={curElm.image} alt=""></img>
                          </div>
                          <div className="detail">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <div className="icon">
                              <button> <AiFillEye /></button>
                              <button><AiFillHeart /></button>
                              <button  onClick={()=> addtocart(curElm)}><AiOutlineShoppingCart /></button>
                            </div>
                          </div>
                        </div>
                        
                        </>

                    )
                  })
              }
                </div>
                <div className="box">
              <div className="header">
                <h2>Top product</h2>
              </div>
              {
                  topProduct.map((curElm)=>
                    {
                    return(
                        <>
                        <div className="productbox">
                          <div className="img_box">
                            <img src={curElm.image} alt=""></img>
                          </div>
                          <div className="detail">
                            <h3>{curElm.Name}</h3>
                            <p>${curElm.price}</p>
                            <div className="icon">
                              <button> <AiFillEye /></button>
                              <button><AiFillHeart /></button>
                              <button  onClick={()=> addtocart(curElm)}><AiOutlineShoppingCart /></button>
                            </div>
                          </div>
                        </div>
                        
                        </>

                    )
                  })
              }
                </div>
                
            </div>
          </div>
      </div>
    </>
  )
}

export default Home

