import React from 'react';

import './Button.css'

export default function Button(props) {
    return (
        <input  type = 'submit'
                className = {'button ' + props.className}
                value = {props.value }
        />
    )
}