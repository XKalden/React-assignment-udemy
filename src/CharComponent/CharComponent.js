import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        border: '5px solid pink',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        
    }
    
    
    
    return(
        <div style={style} onClick={props.clicked}>   
            {props.character}
        </div>
    )



}


export default char;