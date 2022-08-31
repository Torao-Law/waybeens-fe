import React from "react";
// elements
import Button from "../elements/Button";
//json
import product from "../json/product.json";
// utils
import formatPrice from "../utils/formatPrice";

function DetailOrder(props) {
  // eslint-disable-next-line
  let findProduct = product.listProduct.find((item) => {
    if (item.id === Number(props.id))
      return {
        ...item,
      };
  });

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center mb-5"
        style={{ marginTop: 92, padding: "0 100px" }}
      >
        <div className="left-content">
          <div className="img-wrapper" style={{ width: 436, height: 555 }}>
            <img
              src={findProduct.image}
              alt="imgproduct"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div className="ms-5 right-content">
          <div className="right-wrapper">
            <h1 className="fw-bold" style={{ color: "#613D2B" }}>
              {findProduct.name}
            </h1>
            <p style={{ color: "#974A4A", fontSize: 14 }}>
              Stok {findProduct.stok}
            </p>
            <p className="mt-5" style={{ textAlign: "justify", fontSize: 14 }}>
              {findProduct.description}
            </p>
            <p
              className="my-4 text-end"
              style={{ color: "#974A4A", fontWeight: 900, fontSize: 24 }}
            >
              {formatPrice(findProduct.price)}
            </p>
          </div>
          <Button
            className="rounded-3 fw-bold border-0 py-2 w-100 mt-3 text-white"
            style={{ backgroundColor: "#613D2B" }}
          >
            Add Cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default DetailOrder;
