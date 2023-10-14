import React from 'react'
import './mobile.css'

export default function Mobile(data) {
  return (
    <div class='mobile'>
        <img src={data.path}/>
        <h4>{data.name}</h4>
        <p>Price : {data.price}</p>
        <button>Buy Now</button>
    </div>
  )
}
