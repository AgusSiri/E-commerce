import React, { useState } from "react";
import Loader from "./Loader";
import Item from "./Item";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: "1", name: "Cuadro 1", price: 4000, location: "Buenos Aires" },
        { id: "2", name: "Cuadro 2", price: 1200, location: "Buenos Aires" },
        { id: "3", name: "Cuadro 3", price: 900, location: "Buenos Aires" },
      ]);
    }, 2000);
  }).then(response => {
    setProducts(response);
  });
  return (
    <>
      {products.length ? (
        products.map(e => <Item name={e.name} />)
      ) : (
        <Loader size={70} />
      )}{" "}
    </>
  );
};

export default ItemList;