import React from 'react';

import RatioButton from '../RatioButton/RatioButton';
import Button from '../Button/Button';

import './ReportFilters.css';

export default function ReportFilters(props) {
    return(
        <div>
            <RatioButton    text = 'Calibration'
                            name = 'ReportFilters' 
            />
            <RatioButton    text = 'Calibrationa'
                            name = 'ReportFilters' 
            />
            <RatioButton    text = 'Calibrations'
                            name = 'ReportFilters' 
            />
            <Button className = 'reportFiltersButton'
                    value = 'Generate report'
            />
        </div>
    )
}