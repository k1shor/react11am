import React from 'react'
import { API } from '../config'
import {Link} from 'react-router-dom'

const Card2 = ({product, quantity}) => {
  return (
    <>
    <div className="col mb-3">
    <div className="card">
      <img src={`${API}/${product.product_image}`} className="card-img-top" alt="..." style={{height:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title text-truncate">{product.product_name}</h5>
        <h6 className="card-title">Rs.{product.product_price}</h6>
        <h6 className='card-title'>Quantity: {quantity}</h6>
      </div>
    </div>
  </div>
    </>
  )
}

export default Card2