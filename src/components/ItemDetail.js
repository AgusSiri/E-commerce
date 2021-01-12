import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({product}) => {
    return (
        <div>
            <div>
                <img src={product.img} alt={product.name}/>
            </div>
            <div>
                <h1 className="product-tittle">{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <ItemCount init="0" min="0" max="20" onAdd={() => console.log("onAdd")}/>
                <button className="btn-buy">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemDetail;