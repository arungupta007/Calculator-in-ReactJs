import React,{Component} from 'react';
import './styles.css';
const Button =(props)=>{
        const {btnValue,className,showData} = props;
        
        return(
            <button className={className} onClick = {()=>showData(btnValue)}>
              {btnValue}  
            </button>
        )
    }

export default Button;