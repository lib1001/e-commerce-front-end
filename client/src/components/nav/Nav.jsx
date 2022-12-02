import React from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Nav = () => {
  return (
    <div className='nav'>
      <div className="wrapper">
      <div className="left">
        <div className="item">
          <img src="assets/flag.png" alt="" />
          <ExpandMoreIcon />
        </div>
        <div className="item">
          <span>USD</span>
          <ExpandMoreIcon />
        </div>
        <div className="item">
          <Link className='link' to='products/1'>Womens</Link>
        </div>
        <div className="item">
          <Link className='link' to='products/2'>Mens</Link>
        </div>
        <div className="item">
          <Link className='link' to='products/3'>Kids</Link>
        </div>
      </div>
      <div className="center">
        <Link className='link' to='/'>BURKEY<span>STORE</span></Link>
      </div>
      <div className="right">
        <div className="item">
      <Link className='link' to='/'>Home</Link>
      </div>
      <div className="item">
      <Link className='link' to='/'>About</Link>
      </div>
      <div className="item">
      <Link className='link' to='/'>Contact Us</Link>
      </div>
      <div className="item">
      <Link className='link' to='/'>Stores</Link>
      </div>
      <div className="icons">
        <SearchIcon />
        <PersonOutlineIcon />
        <FavoriteBorderOutlinedIcon />
        <div className="cart-icon">
        <ShoppingCartOutlinedIcon />
        <span>0</span>
        </div>
      </div>

      </div>
      </div>
    </div>
  )
}

export default Nav
