import React from 'react'

const Products = () => {
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
            <input type="range" min={0} max={1000} />
            <span>1000</span>
          </div>
        </div>
        <div className="filtered">
          <h3>Sort by</h3>
          <div className="input">
            <input type="radio" id='asc' value='asc' name='price' />
            <label htmlFor="asc">Price (Lowest First)</label>
            </div>
          <div className="input">
            <input type="radio" id='asc' value='asc' name='price' />
            <label htmlFor="asc">Price (Highest First)</label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products