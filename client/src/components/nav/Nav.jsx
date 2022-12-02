import React from 'react';
import './nav.scss';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

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
      <div className="right"></div>
      </div>
    </div>
  )
}

export default Nav
