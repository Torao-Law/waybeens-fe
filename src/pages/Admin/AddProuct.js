import React from 'react'

// component
import Header from '../../components/Header'

//elements
import Button from '../../elements/Button'

//assets
import Img1 from '../../assets/image/imgcheckout.png'

function AddProuct() {
  return (
    <div>
      <Header />
      <div className='container d-flex justify-content-around align-items-center my-5' style={{marginTop: 46}}>
        <div style={{width: 472}}>
            <p className='fw-bold fs-3 mb-3' style={{color: "#613D2B"}}>Add Product</p>
            <form>
                <div class="mb-3">
                    <input type="text" className="form-control p-2" placeholder='Name' id="name" />
                </div>
                <div class="mb-3">
                    <input type="text" className="form-control p-2" placeholder='Stok' id="stok" />
                </div>
                <div class="mb-3">
                    <input type="text" className="form-control p-2" placeholder='Price' id="price" />
                </div>
                <div class="mb-3">
                    <textarea className="form-control p-2" placeholder='Description Product' id="description" style={{height: 150, resize:"none"}}></textarea>
                </div>         
                <div class="mb-3">
                    <input type="file" class="form-control" id="fileUpload" />
                </div>
                <div className='d-flex justify-content-center'>
                    <Button
                        className="btn px-4 button-1 mt-5 w-75"
                        style={{
                            backgroundColor: "#613D2B",
                            fontSize: 14,
                            fontWeight: 700,
                            color: "white",
                        }}
                        >
                        Add Product
                    </Button>
                </div>
            </form>
        </div>
        <div style={{width: 436, height: 555}}>
            <img src={Img1} style={{width: "100%"}} alt="imageadmin"/>
        </div>
      </div>
    </div>
  )
}

export default AddProuct
