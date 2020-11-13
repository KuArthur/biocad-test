import React from 'react';

import './CalibrationReport.css';

import success from '../../img/success.svg';
import fail from '../../img/fail.svg';

export default function CalibrationReport(props) {
    const calibrationData = props.calibrationData;
    const rows = [];
    calibrationData.forEach((data,i) => (
        rows.push(
            <CalibrationReportRow   calibrationData = {data}
                                    key = {i}
             />
        )
    ))

    return (
        <div className = 'calibrationReport'>
            
            <div className = 'calibrationReport-body'>
                <h3 className = 'calibrationReport-tableName'>Calibration report</h3>
                <div className = 'calibrationReport-headers'>
                    <div className = 'column-width-s'>Data</div>
                    <div className = 'column-width-l'>Used buffer solutions</div>
                    <div className = 'column-width-s'>Slope, % <br /> Norm 95-105</div>
                    <div className = 'column-width-s'>Offset, mV <br /> Norm ±(0-20)</div>
                    <div className = 'column-width-m'>User</div>
                </div>
                {rows}
            </div>
        </div>
    )
}

function CalibrationReportRow(props) {
    const calibrationData = props.calibrationData;
    const slope = calibrationData.slope
    const offset = calibrationData.offset
    
    return(
        <div className = 'calibrationReport-row'>
            <span className = 'calibrationReport-data column-width-s'>{calibrationData.data}</span>
            <span className = 'calibrationReport-solution column-width-l'>{calibrationData.solution}</span>
           
            <div className = 'calibrationReport-slope column-width-s'>
                <span>{slope}</span> 
                <img    src = {(slope < 95 || slope >= 105)  ? fail : success} alt = ''
                        className = 'calibrationReport-icon'
                />
            </div>
                
            <div className = 'calibrationReport-offset column-width-s'>
                <span>{offset}</span> 
                <img    src = {offset < - 1 || offset > 21 ? fail : success} alt = ''
                        className = 'calibrationReport-icon'
                />
            </div>
                   
            <span className = 'calibrationReport-user column-width-m'>{calibrationData.user}</span>
        </div>
    )
}