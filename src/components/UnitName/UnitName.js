import React from 'react';

import "./UnitName.css";


export default function UnitName(props) {
    const name = props.name;
    const img = props.img;

    return (
        <div className = 'UnitName'>
            <img src = {img} alt = 'picture' />
            <span className = 'UnitName-name'> {name} </span>
        </div>
    )
}