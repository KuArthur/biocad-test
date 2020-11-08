import React from 'react';

import "./UnitName.css";


export default function UnitName(props) {
    const name = props.name;
    const img = props.img;

    return (
        <div className = 'unitName'>
            <img src = {img} alt = '' />
            <span className = 'unitName-name'> {name} </span>
        </div>
    )
}