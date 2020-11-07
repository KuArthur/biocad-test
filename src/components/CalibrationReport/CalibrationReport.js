import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

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
        <table className = 'calibrationReport'>
            
            <thead className = 'calibrationReport-body'>
                <th>Calibration report</th>
                <tr className = 'calibrationReport-headers'>
                    <td>Data</td>
                    <td>Used buffer solutions</td>
                    <td>Slope, % Norm 95-105</td>
                    <td>Offset, mV Norm ±(0-20)</td>
                    <td>User</td>
                </tr>
                {rows}
            </thead>
        </table>
    )
}

function CalibrationReportRow(props) {
    const calibrationData = props.calibrationData;

    return(
        <tr className = 'calibrationReport-rows'>
            <td className = 'calibrationReport-data'>{calibrationData.data}</td>
            <td className = 'calibrationReport-solution'>{calibrationData.solution}</td>
            {calibrationData.slope < 95 || calibrationData.slope >= 105
                ?   <td>
                        <div className = 'calibrationReport-slope'>
                            <span>{calibrationData.slope}</span> <Fail />
                        </div>
                    </td>
                :   <td>
                        <div className = 'calibrationReport-slope'>
                            <span>{calibrationData.slope}</span> <Success />
                        </div>
                    </td>  
            }
            {calibrationData.offset < -1 || calibrationData.offset > 21
                ?   <td>
                        <div className = 'calibrationReport-offset'>
                            <span>{calibrationData.offset}</span> <Fail />
                        </div>
                    </td>
                :   <td>
                        <div className = 'calibrationReport-offset'>
                            <span>{calibrationData.offset}</span> <Success />
                        </div>
                    </td> 
            }
            
            <td className = 'calibrationReport-user'>{calibrationData.user}</td>
        </tr>
    )
}