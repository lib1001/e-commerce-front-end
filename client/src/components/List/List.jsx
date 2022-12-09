import React from 'react';
import './List.scss';
import Card from '../Card/Card';

const List = () => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/8074103/pexels-photo-8074103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/8218381/pexels-photo-8218381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            isNew: true,
            title: "Hat",
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "T-Shirt",
            isNew: true,
            oldPrice: 40,
            price: 30,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Jacket",
            oldPrice: 120,
            price: 80,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Workout",
            oldPrice: 50,
            price: 45,
        },
    ]
  return (
    <div className='list'>
        {data?.map(item => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List