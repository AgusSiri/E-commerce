import React from 'react'
import CartWidget from './CartWidget';


export default function NavBar(){
    return ( 
        <div>
            <div>
                <ul style={{display:'flex', alignContent:'center', alignItems:'stretch', listStyle:'none'}}>
                    <li><a style={{ textDecoration:'none', color:'black', padding:'10px'}} href="#">Home</a></li>
                    <li><a style={{ textDecoration:'none', color:'black', padding:'10px'}} href="#">About</a></li>      
                    <li><a style={{ textDecoration:'none', color:'black', padding:'10px'}} href="#">Products</a></li>      
                    <li><a style={{ textDecoration:'none', color:'red', padding:'10px'}} href="#">Help</a></li>
                </ul>
            </div>
            <CartWidget/>
        </div>  
    )
}