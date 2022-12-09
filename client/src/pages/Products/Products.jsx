import React, {useState} from 'react';
import './Products.scss';
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'

const Products = () => {

const catId = parseInt(useParams().id);
const [maxPrice, setMaxPrice] = useState(1000);
const [sort, setSort] = useState(null)
  
  return (
    <div className='products'>
      <div className="left">
        <div className="filtered">
          <h2>Categories</h2>
          <div className="input">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="input">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Outerwear</label>
          </div>
          <div className="input">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Accessories</label>
          </div>
        </div>
        <div className="filtered">
          <h2>Filter by Price</h2>
          <div className="input">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value) } />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filtered">
          <h3>Sort by</h3>
          <div className="input">
            <input type="radio" id='asc' value='asc' name='price' onChange={(e) => setSort("asc")} />
            <label htmlFor="asc">Price (Lowest First)</label>
            </div>
          <div className="input">
            <input type="radio" id='asc' value='asc' name='price' onChange={(e) => setSort("asc")} />
            <label htmlFor="asc">Price (Highest First)</label>
            </div>
        </div>
      </div>
      <div className="right">
        <img className='catImg' src="https://images.pexels.com/photos/12124914/pexels-photo-12124914.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products