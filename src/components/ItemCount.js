import React, { useState } from 'react'
import './styleComponents.css'



const ItemCount = props => {
        const [value, setValue] = useState(props.init ? parseInt(props.init) : 0);

    return ( 
        <div className="contador">
        <p className='producto'>Cantidad</p>
        <button
          className="count__button count__button--dec"
          onClick={() => {
            if (value - 1 >= parseInt(props.min)) setValue(value - 1);
          }}
        >
          -
        </button>
        <input type="number" className="count__input" disabled value={value} />
        <button
          className="count__button count__button--add"
          onClick={() => {
            if (value + 1 <= props.max) {
              setValue(value + 1);
              props.onAdd();
            }
          }}
        >
          +
        </button>
      </div>
    );
};

export default ItemCount;