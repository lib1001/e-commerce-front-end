import React from 'react';
import './nav.scss';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Nav = () => {
  return (
    <div className='nav'>
      <div className="center">
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
          <Link to='products/1'>Womens</Link>
        </div>
        <div className="item">
          <Link to='products/2'>Mens</Link>
        </div>
        <div className="item">
          <Link to='products/3'>Kids</Link>
        </div>
      </div>
      <div className="center">
        <Link to='/'>BURKEYSTORE</Link>
      </div>
      <div className="right">
      <Link to='/'>Home</Link>
      <Link to='/'>About</Link>
      <Link to='/'>Contact Us</Link>
      <Link to='/'>Stores</Link>
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
