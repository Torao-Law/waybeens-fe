import React from 'react'

// component
import Header from '../components/Header'
import CardCheckout from '../components/CardCheckout'

function Checkout() {
  return (
    <>
        <Header />
        <div className="container">
            <CardCheckout />
        </div>
    </>
  )
}

export default Checkout
