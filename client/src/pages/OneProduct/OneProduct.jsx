import React from 'react';
import { useState } from 'react';
import './OneProduct.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

const OneProduct = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/8454520/pexels-photo-8454520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8454521/pexels-photo-8454521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className='oneProduct'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$19.99</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis repudiandae explicabo dolor magni molestiae fugit iusto incidunt ea, excepturi blanditiis est, vitae architecto eveniet voluptates in dolore nisi. Quasi, explicabo.</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => prev === 0 ? 0 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity(prev => prev+1)}>+</button>
        </div>
        <button className='add'>
        <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: Outerwear</span>
              <span>Tag: Jacket, Women, Top, Coat</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
    </div>
  );
};


export default OneProduct