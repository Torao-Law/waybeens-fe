import React from 'react'

// assets
import Img from '../assets/image/imgcheckout.png'
import IcDelete from '../assets/image/IcDelete.png'
import Button from '../elements/Button'

function CardCheckout() {
  return (
    <div style={{marginTop: 77}}>
        <h3>My Cart</h3>
        <p>Review order</p>
        <div className='d-flex justify-content-between'>
        <div className='w-75'>
            <hr style={{border: "1px solid #613D2B"}}/>
            <div className="d-flex flex-row justify-content-between">
                <div className='d-flex flex-row'>
                    <img src={Img} alt="img" style={{width: 80, height: 80}}/>
                    <div className="ms-3">
                        <p className='fw-bold' style={{color: "##613D2B"}}>GUETEMALA Beans</p>
                        <div className='d-flex align-items-center'>
                            <span className='fs-4 fw-bold'>-</span>
                            <span className='rounded p-1 px-3 mx-2 fw-bold' style={{ backgroundColor: "#F6E6DA"}}> 2 </span>
                            <span className='fs-4 fw-bold'>+</span>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column'>
                    <p style={{color: "#974A4A"}}>Rp.200.000</p>
                    <div className='d-flex justify-content-end'>
                        <img src={IcDelete} alt="delete" style={{width: 20}} />
                    </div>
                </div>
            </div>
            <hr style={{border: "1px solid #613D2B"}}/>
        </div>
        <div className='w-25 ms-5'>
            <hr style={{border: "1px solid #613D2B"}}/>
            <div className="d-flex flex-row justify-content-between">
                <div>
                    <p>Sub Total</p>
                    <p>QTY</p>
                </div>
                <div className='d-flex flex-column justify-items-end'>
                    <p>Rp.200.000</p>
                    <p>2</p>
                </div>
            </div>
            <hr style={{border: "1px solid #613D2B"}}/>
            <div className='d-flex justify-content-between'>
                <p>Total</p>
                <p>Rp.400.000</p>
            </div>

            <Button className="btn px-4 button-1 m-0 mt-5 p-1 w-100"
              style={{
                backgroundColor: "#613D2B",
                fontSize: 14,
                fontWeight: 700,
                color: "white",
              }}>Pay</Button>
        </div>
        </div>
    </div>
  )
}

export default CardCheckout
