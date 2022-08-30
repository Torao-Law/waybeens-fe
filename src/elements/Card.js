import React from "react";
import { Link } from "react-router-dom";

//json
import product from "../json/product.json";

// utils
import formatPrice from "../utils/formatPrice";

function Card() {
  return (
    <div className="container d-flex flex-row justify-content-between my-5">
      {product.listProduct.map((item, index) => (
        <Link key={item.id} to={`/detailProduct/ ${item.id}`}>
          <div
            className="card"
            style={{
              width: 241,
              height: 410,
              backgroundColor: "#F6E6DA",
              border: "none",
            }}
          >
            <img src={item.image} className="card-img-top" alt="card" />
            <div className="p-3">
              <p
                className="card-text fs-5 m-0 fw-bold"
                style={{ color: "#613D2B" }}
              >
                {item.name}
              </p>
              <p className="m-0" style={{ color: "#974A4A" }}>
                {formatPrice(item.price)}
              </p>
              <p className="m-0" style={{ color: "#974A4A" }}>
                Stok : {item.stok}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
