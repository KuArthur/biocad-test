import React from 'react';

import './RatioButton.css';

export default function RatioButton(props) {
    
    const {
        text,
        name,
        checked
    } = props

    function handleChecked(e) {
        props.onChecked(e.target.value)
    }
    return (
        <div className = 'ratioButton'>
            <input  type = 'radio'
                    className = 'ratioButton-input'
                    id = {text}
                    name= {name}
                    checked = {checked}
                    onChange = {handleChecked}
                    value = {text}
            />
            <label className = 'ratioButton-text' for={text}>{text}</label>
        </div>
    )
}