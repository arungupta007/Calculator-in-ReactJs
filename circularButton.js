import React from 'react';
import './styles.css';
const CircularButton = (props) =>{
    return(
        <div>
        <button className="circularButton" onClick = {props.Toggle}>~</button>
        </div>
    )
}
export default CircularButton;