import React from 'react'

//component
import Header from '../../components/Header'

function ListProduct() {
  return (
    <div>
      <Header />
      <div className="container">
        <h3 style={{marginTop: 83, color: "#613D2B", fontWeight: 900}}>List Product</h3>
        <table className="table table-bordered" style={{marginTop: 52}}>
            <thead>
                <tr>
                    <th scope="col" className='text-center'>No</th>
                    <th scope="col" className='text-center'>Image</th>
                    <th scope="col" className='text-center'>Name</th>
                    <th scope="col" className='text-center'>Stok</th>
                    <th scope="col" className='text-center'>Price</th>
                    <th scope="col" className='text-center'>Description</th>
                    <th scope="col" className='text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row d-flex text-align-center">1</th>
                    <td className='m-0'>Mark</td>
                    <td className='m-0'>Otto</td>
                    <td className='m-0 text-center'>@mdo</td>
                    <td className='m-0 text-center'>@mdo</td>
                    <td className='m-0'>@mdo</td>
                    <td className='p-0 m-0 d-flex justify-content-center align-middle'>
                            <p className='m-0 px-5 rounded fw-bold text-white bg-success me-2'>Update</p>
                            <p className='m-0 px-5 rounded fw-bold text-white bg-danger'>Delete</p>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListProduct
