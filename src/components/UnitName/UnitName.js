import React from 'react';

import "./UnitName.css";


export default function UnitName(props) {
    const device = props.device;
    // const name = props.name;
     const img = props.img;

    return (
        <div className = 'unitName'>
            <img src = {img} alt = '' />
            <span className = 'unitName-name'> {device.name} </span>
        </div>
    )
}