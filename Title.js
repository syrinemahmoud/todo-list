import React from 'react';

export default function Title(props){
    let s=40
    if (props.small===true) {
        
        
    }
    return(
        <h1 style = {{...props.style,fontSize:s
        }}>
    
           {props.title}
        </h1>
    )
    
}