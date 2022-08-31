import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// component
import Header from "../components/Header";
import DetailOrder from "../components/DetailOrder";

//json
import product from "../json/product.json";

function DetailProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  return (
    <div>
      <Header />
      <DetailOrder data={product.listProduct} id={id} />
    </div>
  );
}

export default DetailProduct;
