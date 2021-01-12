import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import cuadro1 from './images/cuadro1.jpg'

const popArt = 
   {
      id: '1',
      name: 'Arte Pop',
      description: 'Oleo sobre Lienzo',
      price: 5000,
      img: {cuadro1},
}


const ItemDetailContainer = (product) => {
   const [prod, setProduct] = useState();

   useEffect(() => {
      getProduct();
    }, []);

   const getProduct = () => {
      const promiseProduct = new Promise(resolve => {
         setTimeout(() => {
            resolve(product);
         }, 2000)        
      });
      promiseProduct.then((result) => {
         setProduct(result);
      });
   }
   const ReturnProduct = () => {
      if(!prod){
         return <p>Cargando...</p>;
      }
      return <ItemDetail product={popArt} />;
   }

   return (
      <div className="container">
            <div>
               <ReturnProduct />  
            </div>
      </div>
   );
 }
export default ItemDetailContainer;
