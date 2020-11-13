import React, {useState} from 'react';

import RadioButton from '../RadioButton/RadioButton';
import Button from '../Button/Button';
import DropList from '../DropList/DropList';

import './ReportFilters.css';

const INSCRIPTIONS = ['Calibration','Measuring','Using'];

const options = [              
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
        ratioButtons.push(<RadioButton  text = {inscription}
                                        name = 'ReportFilters' 
                                        key = {inscription + i}
                                        checked = {checked === inscription}
                                        onChecked = {handleChecked}
                                        value= {inscription === 'Calibration' ? 'Calibration' : inscription }
                          />
        )
    ))

    return (
        <div className = 'reportFilters'>
            <div className = 'reportFilters-dropList'>
                <DropList options = {options} />
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