import React from 'react'
import { useParams } from 'react-router-dom'

//json
import product from '../json/product.json'

function DetailOrder() {
  
  const { id } = useParams()

  console.log(id)
  
  return (
    <>
        <div className='container mt-5'>
          <div className="img-wrapper">
            <img src="" alt="" />
            <p>{id}</p>
          </div>
        </div>
    </>
  )
}

export default DetailOrder
