import React from "react";
import "./Cart.scss";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8074103/pexels-photo-8074103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/8218381/pexels-photo-8218381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true,
      desc: "hi0",
      title: "Hat",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "T-Shirt",
      desc: "YO",
      isNew: true,
      oldPrice: 40,
      price: 30,
    },
  ];

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id} >
          <img src={item.img} alt="" />
          <div className="detail">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteForeverOutlinedIcon className="remove" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>TOTAL</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="empty">Empty Cart</span>
    </div>
  );
};

export default Cart;
