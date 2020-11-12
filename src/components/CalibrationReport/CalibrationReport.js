// import { render } from '@testing-library/react';
import React from 'react';
// import ReactDOM from 'react-dom';

import './CalibrationReport.css';

import {calibrationReport} from '../../db/calibrationReport';
import {ReactComponent as Success} from '../../img/success.svg';
import {ReactComponent as Fail} from '../../img/fail.svg';

// const HEAD = ['Data','Used buffer solutions','Slope, % Norm 95-105','Offset, mV Norm ±(0-20)','User']

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

    return(
        <div className = 'calibrationReport-row'>
            <span className = 'calibrationReport-data column-width-s'>{calibrationData.data}</span>
            <span className = 'calibrationReport-solution column-width-l'>{calibrationData.solution}</span>
            {calibrationData.slope < 95 || calibrationData.slope >= 105
                ?   
                        <div className = 'calibrationReport-slope column-width-s'>
                            <span>{calibrationData.slope}</span> <Fail className = 'calibrationReport-icon' />
                        </div>
                    
                :   
                        <div className = 'calibrationReport-slope column-width-s'>
                            <span>{calibrationData.slope}</span> <Success className = 'calibrationReport-icon' />
                        </div>
                    
            }
            {calibrationData.offset < -1 || calibrationData.offset > 21
                ?   
                        <div className = 'calibrationReport-offset column-width-s'>
                            <span>{calibrationData.offset}</span> <Fail className = 'calibrationReport-icon' />
                        </div>
                    
                :   
                        <div className = 'calibrationReport-offset column-width-s'>
                            <span>{calibrationData.offset}</span> <Success className = 'calibrationReport-icon' />
                        </div>
                   
            }
            
            <span className = 'calibrationReport-user column-width-m'>{calibrationData.user}</span>
        </div>
    )
}