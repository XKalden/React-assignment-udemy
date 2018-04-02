import React from 'react';


export const validation = (props) => {


    let validationText = 'Text Long enought';
    if(props.inputLength <= 5){
        validationText = 'Text to short!'
    }


    return(
        <div>
            <p>{validationText}</p>
        </div>
    );
};


