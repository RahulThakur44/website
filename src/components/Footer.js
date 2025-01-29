import React from 'react'
import './Footer.css'
import { FaPiggyBank ,FaShippingFast,FaHeadphonesAlt,FaWallet } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
         <div className="container">
            <div className="left_box">
                <div className="box">
                    <div className="icon_box">
                    <FaPiggyBank />
                    </div>
                    <div className="detail">
                        <h3>Greate Saving</h3>
                        <p>Apna dukan Apna Samaan</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                    <FaShippingFast />
                    </div>
                    <div className="detail">
                        <h3>free delivery</h3>
                        <p>Apna dukan Apna Samaan</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                    <FaHeadphonesAlt />
                    </div>
                    <div className="detail">
                        <h3>24/7 support</h3>
                        <p>Apna dukan Apna Samaan</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                    <FaWallet />
                    </div>
                    <div className="detail">
                        <h3>money back</h3>
                        <p>Apna dukan Apna Samaan</p>
                    </div>
                </div>
            </div>
            <div className="right_box">
                <div className="header">
                    <img src='image/techmall1.jpeg' alt=""></img>
                    <p>Techmall apna electronic shop </p>
                </div>
                <div className="bottom">
                    <div className="box">
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>sales</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>product</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track order</li>
                            <li>New Product</li>
                            <li>old product</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Contact us</h3>
                        <ul>
                            <li>401101, Maxus mall near csb point</li>
                            <li>+(91)9969XXXXXX</li>
                            <li>Techmall@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Footer
