import React from 'react'
import CartWidget from './CartWidget';
import './styleComponents.css';



export default function NavBar(){
    return ( 
        <div>
            <div>
                <ul className="navBar">
                    <li><a  href="#">Home .</a></li>
                    <li><a  href="#">About .</a></li>      
                    <li><a  href="#">Products .</a></li>      
                    <li><a style={{color:'red'}} href="#">Help</a></li>
                    <li><CartWidget/></li>
                </ul>
            </div>
        </div>  
    )
}