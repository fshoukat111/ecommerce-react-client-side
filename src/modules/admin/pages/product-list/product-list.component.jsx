import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Rating } from "primereact/rating";

import "./product-list.css";
import { productService } from "api/services";

export const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const { slug } = useParams();

  const header = (
    <a href="">
      <img
        alt="Card"
        src="https://source.unsplash.com/user/erondu/1600x900"
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
      />
    </a>
  );
  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
    </span>
  );

  useEffect(() => {
    getProductList(slug);
  }, []);

  const getProductList = () => {
    productService.getAllProduct().then((products) => {
      setProductList(products.data.productList);
    });
  };

  return (
    <>
      <div className="product-list">
        {productList.map((product) => {
          return (
            <Card
              key={product._id}
              title={product.productTitle.slice(0, 25)}
              subTitle="Subtitle"
              style={{ width: "20em" }}
              header={header}
            >
              {/* <p className="p-m-0" style={{ lineHeight: "1.5" }}>
              {product.productDetail}
            </p> */}
              <Rating value={2} readOnly stars={5} cancel={false} />
              <p className="p-m-0" style={{ lineHeight: "1.5" }}>
                ${product.productPrice}
              </p>
            </Card>
          );
        })}
      </div>
    </>
  );
};
