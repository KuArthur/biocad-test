import React from 'react';

import './DeviceInfo.css';

const INFO_NAMES = ['type','status', 'manufacturer', 'model', 'repairs', 'using',
                    'person','country','serial_number',
                    'guid','bims_id','tam']

const translate = {
    type: 'Тип оборудования',
    status: 'Статус',
    manufacturer: 'Изготовитель',
    model: 'Модель',
    repairs: 'Ответственное подразделение (ремонт)',
    using: 'Эксплуатирующее подразделение',
    person: 'МОЛ',
    country: 'Территория',
    serial_number: 'Серийный номер',
    guid: 'GUID',
    bims_id: 'Bims ID',
    tam: 'Tam',
}

export default function DeviceInfo(props) {
    const device = props.device;
    
    const rows = INFO_NAMES.map((specName,i) => (
         <DeviceInfoRow  device = {device[specName]}
                                specificationName = {translate[specName]}
                                key = {specName}
                />
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

    const classColor = ['GUID','Bims ID','Tam'].includes(specificationName) ? '-blue' : '';
    return (
        <div className = 'deviceInfo-row'>
            <span className = 'deviceInfo-specName'>{specificationName}: </span>
            <span className = {'deviceInfo-specification' +classColor}>{device}</span>
        </div>
    )
}