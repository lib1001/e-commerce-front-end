import React, {useState} from 'react';
import './Nav.scss';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='nav'>
      <div className="wrapper">
      <div className="left">

        <div className="item">
          <img src="https://freesvg.org/img/US-UK_Flag.png" alt="" className='flag'/>
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
      <Link className='link' to='/contact'>Contact Us</Link>
      </div>
      <div className="item">
      <Link className='link' to='/'>Stores</Link>
      </div>
      <div className="icons">
        <SearchIcon />
        <PersonOutlineIcon />
        <FavoriteBorderOutlinedIcon />
        <div className="cart-icon" onClick={() => setOpen(!open)}>
        <ShoppingCartOutlinedIcon />
        <span>0</span>
        </div>
      </div>

      </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Nav
