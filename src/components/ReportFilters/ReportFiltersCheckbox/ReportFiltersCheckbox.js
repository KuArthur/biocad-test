import React, { useState } from 'react';

import './ReportFiltersCheckbox.css';

export default function ReportFiltersCheckbox(props) {
    const text = props.text;
    return (
        <div className = 'reportFiltersCheckbox'>
            <input  type = 'radio'
                    className = 'reportFiltersCheckbox-input'
                    id = {text}
                    name= {text + 1}
            />
            <label className = 'reportFiltersCheckbox-text' for={text}>{text}</label>
        </div>
    )
}