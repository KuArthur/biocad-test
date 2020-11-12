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
    
    const newDevice = Object.fromEntries(Object.entries(device).filter(([key,value]) => key !="name"))
    INFO_NAMES.forEach((specName,i) => (
         //TODO: убрать forEach
        rows.push(
            <DeviceInfoRow  device = {Object.values(newDevice)[i]}
                            specificationName = {specName}
                            key = {i} //TODO: подумать, какой ключ поставить
            />
        )             
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

    const classColor = specificationName === 'GUID'|| specificationName === 'Bims ID'|| specificationName === 'Tam' ? '-blue' : '';

    return (
        <div className = 'deviceInfo-row'>
            <span className = 'deviceInfo-specName'>{specificationName}: </span>
            <span className = {'deviceInfo-specification' +classColor}>{device}</span>
        </div>
    )
}