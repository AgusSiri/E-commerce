import React from 'react'
import './styleComponents.css'
import ItemList from './ItemList';


const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemlist">
         <p>Hola, {greeting}!</p>
         <ItemList></ItemList>
        </div>
    )
}

export default ItemListContainer;