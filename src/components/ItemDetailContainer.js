import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import cuadro1 from './images/cuadro1.jpg'
import { useParams } from 'react-router-dom';

const products = [
   {
      id: '1',
      name: 'Arte Pop',
      description: 'Oleo sobre Lienzo',
      price: 5000,
      img: {cuadro1},
   },{
      id: '2',
      name: 'Segundo Cuadro',
      description: 'Otro cuadro',
      price: 4000,
   },{
      id: '3',
      name: 'Tercer Cuadro',
      description: 'Otro cuadro',
      price: 3000,
   }
]


function ItemDetailContainer() {

   const [ prod, setProduct ] = useState()
   const { id } = useParams()

   useEffect(() => {
      const promiseProduct = new Promise((resolve, reject)=>{
      setTimeout(function(){
            const i = products.find(product => product.id == id)
            resolve(i);
      }, 2000);       
      }
      )
      promiseProduct.then(result => setProduct(result)) 
      promiseProduct.catch(err => console.log("algo salio mal"))
      }, [id]);

   return (
      <div className="container">
         { prod ? 
            <ItemDetail
            id= {prod.id}
            name= {prod.id}
            description= {prod.description}
            price= {prod.price}
            image= {prod.image}
            />
            :
            <h2>Loading</h2>}
      </div>
   );
 }
export default ItemDetailContainer;
