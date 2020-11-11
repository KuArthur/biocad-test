import React, { useState } from 'react';

import './RatioButton.css';

export default function RatioButton(props) {
    const text = props.text;
    const name = props.name;
    return (
        <div className = 'ratioButton'>
            <input  type = 'radio'
                    className = 'ratioButton-input'
                    id = {text}
                    name= {name}
            />
            <label className = 'ratioButton-text' for={text}>{text}</label>
        </div>
    )
}