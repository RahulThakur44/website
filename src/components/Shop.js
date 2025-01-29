import React, { useState } from 'react'
import './Shop.css'
import { AiFillHeart,AiFillEye,AiOutlineClose  } from "react-icons/ai";
const Shop = ({shop,Filter,allcatefilter,addtocart}) => {

  const [detail, setDetail] =useState([])
  const [showDetail,setShowDetail] = useState(false)

  const detailpage =(product)=>
  {
    const detaildata = ([{product}])
    const productdetail = detaildata[0]['product']
    setDetail(productdetail)
    setShowDetail(true)
  }

  const closedetail=()=>
  {
    setShowDetail(false) 
  }
  return (
    <>
      {
        showDetail ?
        <>
         <div className='product_detail'>
            <button className='close_btn' onClick={closedetail}><AiOutlineClose/></button>
            <div className="container">
                <div className="img_box">
                  <img src={detail.image} alt=''></img>
                </div>
                <div className="info">
                  <h4># {detail.cat}</h4>
                  <h2>{detail.Name}</h2>
                  <p>A mobile screen everyone will love: wheater your family is stream or doing gaming</p>
                  <h3>${detail.price}</h3>
                  <button onClick={()=> addtocart(detail)}>Add to Cart</button>
                </div>
            </div>
          </div>
        </>
        : null
      }
     
      <div className="shop">
        <h2># shop</h2>
        <p>Home .shop</p>
        <div className="container">
            <div className="left_box">
              <div className="category">
                <div className="header">
                  <h3>All categories</h3>
                </div>
                <div className="box">
                  <ul>
                    <li onClick={()=> allcatefilter()}># All</li>
                    <li onClick={()=> Filter("mobile")}># mobile</li>
                    <li onClick={()=> Filter("laptop")}># laptop</li>
                    <li onClick={()=> Filter("tv")}># Tv</li>
                    <li onClick={()=> Filter("powerbank")}># powerbank</li>
                    <li onClick={()=> Filter("iron")}># iron</li>
                    <li onClick={()=> Filter("refrigerater")}># refrigerater</li>
                    <li onClick={()=> Filter("headphone")}># headphone</li>
                    <li onClick={()=> Filter("charger")}># charger</li>
                    <li onClick={()=> Filter("videogame")}># videogame</li>
                    <li onClick={()=> Filter("mixer")}># mixer</li>
                    <li onClick={()=> Filter("watch")}># watch</li>
                    <li onClick={()=> Filter("monitor")}># monitor</li>
                  </ul>
                </div>
              </div>
              <div className="banner">
                <div className="img_box">
                  <img src="image/appleshop.jpg" alt=""></img>
                </div>
              </div>
            </div>
            <div className="right_box">
              <div className="banner">
                <div className="img_box">
                  <img src="image/nokia.webp" alt="nokia phone"></img>
                </div>
              </div>
              <div className="product_box">
                <h2> Shop Product</h2>
                <div className="product_container">
                  {
                    shop.map((curElm)=>{
                    return(
                          <>
                            <div className="box">
                              <div className="img_box">
                                <img src={curElm.image} alt=""></img>
                                <div className='icon'>
                                <li><AiFillHeart/></li>
                               <li onClick={()=> detailpage(curElm)}><AiFillEye /></li> 
                                </div>
                              </div>
                              <div className="detail">
                                <h3>{curElm.Name}</h3>
                                <p>${curElm.price}</p>
                                <button onClick={()=> addtocart(curElm)}>Add to Cart</button>
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
      </div>
    </>
  )
}

export default Shop
