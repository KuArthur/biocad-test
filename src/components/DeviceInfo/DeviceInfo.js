// import { render } from '@testing-library/react';
import React from 'react';
// import ReactDOM from 'react-dom';

import './DeviceInfo.css';

const INFO_NAMES = ['Тип оборудования','Статус','Изготовитель','Модель',
                    'Ответственное подразделение (ремонт)','Эксплуатирующее подразделение','МОЛ','Территория',
                    'Серийный номер','GUID','Bims ID','Tam']

export default function DeviceInfo(props) {
    const device = props.device;
    const rows = []
    
    INFO_NAMES.forEach((specName,i) => (
        device.forEach(device => (
            rows.push(
                <DeviceInfoRow  device = {Object.values(device)[i]}
                                specificationName = {specName}
                />
            )
        ))
                    
    ))

    return (
        <div className = 'deviceInfo'>
            {rows}
        </div>
    )
}

function DeviceInfoRow(props) {
    const device = props.device
    const specificationName = props.specificationName;

    return (
    specificationName === 'GUID'|| specificationName === 'Bims ID'|| specificationName === 'Tam' ?
        <div className = 'deviceInfo-row'>
            <span className = 'deviceInfo-specName'>{specificationName}: </span>
            <span className = 'deviceInfo-specification-blue'>{device}</span>
        </div>
        :
        <div className = 'deviceInfo-row'>
            <span className = 'deviceInfo-specName'>{specificationName}: </span>
            <span className = 'deviceInfo-specification'>{device}</span>
        </div>
    )
}