import React, {useState} from 'react';

import RatioButton from '../RatioButton/RatioButton';
import Button from '../Button/Button';
import DropList from '../DropList/DropList';

import './ReportFilters.css';

const INSCRIPTIONS = ['Calibration','Measuring','Using']; //лучше делать в компоненте или в App?

const options = [               //лучше делать в компоненте или в App?
    {key: 1, value: '1 month'},
    {key: 2, value: '2 month'},
    {key: 3, value: '3 month'},
    {key: 4, value: '4 month'}
  ]

export default function ReportFilters(props) {
    const [checked, setChecked] = useState(INSCRIPTIONS[0]);

    function handleChecked(value) {
        setChecked(value);
    }

    const ratioButtons = [];
    INSCRIPTIONS.forEach((inscription,i) => (
        
        // inscription === 'Calibration' ?
        ratioButtons.push(<RatioButton  text = {inscription}
                                        name = 'ReportFilters' 
                                        key = {inscription + i}
                                        checked = {checked === inscription}
                                        onChecked = {handleChecked}
                                        value= {inscription === 'Calibration' ? 'Calibration' : inscription }
        />)
    ))

    return (
        <div className = 'reportFilters'>
            <div className = 'reportFilters-dropList'>
                <DropList options = {options} /> {/* лучше обернуть в новый div или передать компоненту класс?*/}
            </div>
            
            <div className = 'reportFilters-ratioButtons'>
                {ratioButtons}
            </div>
            
            <Button className = 'reportFilters-button'
                    value = 'Generate report'
            />
        </div>
    )
}