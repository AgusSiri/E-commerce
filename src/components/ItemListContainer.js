import React from 'react'
import './styleComponents.css';


const ItemListContainer = ({greeting}) => {
    return (
        <div className="itemlist">
         <p>Hola, {greeting}!</p>
        </div>
    )
}

export default ItemListContainer;