// import { render } from '@testing-library/react';
import React from 'react';
// import ReactDOM from 'react-dom';

import './CalibrationReport.css';

import {calibrationReport} from '../../db/calibrationReport';
import {ReactComponent as Success} from '../../img/success.svg';
import {ReactComponent as Fail} from '../../img/fail.svg';

export default function CalibrationReport(props) {
    const calibrationData = props.calibrationData;
    const rows = [];
    calibrationData.forEach(data => (
        rows.push(
            <CalibrationReportRow   calibrationData = {data} />
        )
    ))

    return (
        <div className = 'calibrationReport'>
            
            <div className = 'calibrationReport-body'>
                <h2>Calibration report</h2>
                <div className = 'calibrationReport-headers'>
                    <div>Data</div>
                    <div>Used buffer solutions</div>
                    <div>Slope, % <br /> Norm 95-105</div>
                    <div>Offset, mV <br /> Norm ±(0-20)</div>
                    <div>User</div>
                </div>
                {rows}
            </div>
        </div>
    )
}

function CalibrationReportRow(props) {
    const calibrationData = props.calibrationData;

    return(
        <div className = 'calibrationReport-rows'>
            <span className = 'calibrationReport-data'>{calibrationData.data}</span>
            <span className = 'calibrationReport-solution'>{calibrationData.solution}</span>
            {calibrationData.slope < 95 || calibrationData.slope >= 105
                ?   
                        <div className = 'calibrationReport-slope'>
                            <span>{calibrationData.slope}</span> <Fail />
                        </div>
                    
                :   
                        <div className = 'calibrationReport-slope'>
                            <span>{calibrationData.slope}</span> <Success />
                        </div>
                    
            }
            {calibrationData.offset < -1 || calibrationData.offset > 21
                ?   
                        <div className = 'calibrationReport-offset'>
                            <span>{calibrationData.offset}</span> <Fail />
                        </div>
                    
                :   
                        <div className = 'calibrationReport-offset'>
                            <span>{calibrationData.offset}</span> <Success />
                        </div>
                   
            }
            
            <span className = 'calibrationReport-user'>{calibrationData.user}</span>
        </div>
    )
}