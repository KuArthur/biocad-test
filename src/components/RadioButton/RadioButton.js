import React from 'react';

import './RadioButton.css';

export default function RadioButton(props) {
    const {
        text,
        name,
        checked
    } = props

    function handleChecked(e) {
        props.onChecked(e.target.value)
    }
    
    return (
        <div className = 'radioButton'>
            <input  type = 'radio'
                    className = 'radioButton-input'
                    id = {text}
                    name= {name}
                    checked = {checked}
                    onChange = {handleChecked}
                    value = {text}
            />
            <label className = 'radioButton-text' for={text}>{text}</label>
        </div>
    )
}