import React from 'react'
import { MdLocalShipping} from "react-icons/md";
//import { FiLogIn } from "react-icons/fi";
import "./Navbar.css";
import { Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { CiLogout,CiUser } from "react-icons/ci"; 
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = ({search,setSearch,searchproduct}) => {
  const { loginWithRedirect,logout,user, isAuthenticated } = useAuth0();

  return (
    <>
    <div className='header'>
      <div className='top_header'>
          <div className='icon'>
          <MdLocalShipping />
          </div>
          <div className='info'>
             <p>free shipping when people shopping upto $1000</p> 
          </div>
      </div>
      <div className='mid_header'>
          <div className='logo'>
              <img src="image/techmall1.jpeg" alt="logo"></img>
          </div>
          <div className='search'>
              <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='search'></input>
              <Button variant='contained' onClick={searchproduct}>search</Button>
          </div>
          {
              isAuthenticated ?
            <div className='user'>
              <div className='icon'>
              <CiLogout />
              </div>
              <div className='btn'>
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>logout</Button>
              </div>
            </div>
            :
                 <div className='user'>
                   <div className='icon'>
                   <LoginIcon></LoginIcon>
                   </div>
                  <div className='btn'>
                 <Button onClick={() => loginWithRedirect()}>login</Button>
                 </div>
               </div>

          }
          </div>
            <div className='last_header'>
              <div className="user_profile">
              {
                isAuthenticated ?
                <>
                <div className="icon">
                <CiUser />
                </div>
                <div className="info">
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                </div>
                
                </>
                :
                <>
                 <div className="icon">
                <CiUser />
                </div>
                <div className="info">
                  <p>Please login</p>
                </div>
                </>
              }
              </div>
              <div className='nav'>
                  <ul>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/shop' className='link'>shop</Link></li>
                <li><Link to='/cart' className='link'>Cart</Link></li>
                <li><Link to='/about' className='link'>About</Link></li>
                <li><Link to='/contact' className='link'>Contact</Link></li>
                  </ul>
              </div>
              <div className="offer">
                  <p>flat 10% over all iphone</p>
              </div>
            </div>

      </div>


    
    </>
    
  )
}


export default Navbar
