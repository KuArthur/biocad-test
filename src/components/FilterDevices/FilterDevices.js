import React from 'react';

import './FilterDevices.css';

import Button from '../Button/Button'

export default function FilterDevices(props) {
    const filterText = props.filterText;
    
    function handleFilterTextChange(e) {
        props.onFilterTextChange(e.target.value);
        
    }

    function handleDeviceChange(e) {
        props.onDeviceChange();
        e.preventDefault()
    }

    return (
        <form onSubmit = {handleDeviceChange}>
            
            <div className = 'filterDevices'>
                <div className = 'filterDevices-head'>Enter inventory number, guid or bims id</div>
                <input  type = 'text'
                        value = {filterText}
                        onChange = {handleFilterTextChange}
                        className = 'filterDevices-input'
                />
                <Button className = 'filterDevices-button'
                        value = 'Search'
                />
            </div>
        </form>
    )

}