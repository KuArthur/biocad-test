import React from 'react';

import './FilterDevices.css';

export default function FilterDevices(props) {
    const filterText = props.filterText;
    
    function handleFilterTextChange(e) {
        props.onFilterTextChange(e.target.value);
    }

    return (
        <form>
            
            <div className = 'filterDevices'>
                <div className = 'filterDevices-head'>Enter inventory number, guid or bims id</div>
                <input  type = 'text'
                        value = {filterText}
                        onChange = {handleFilterTextChange}
                        className = 'filterDevices-input'
                />
                <input  type = 'submit'
                        value = 'Search'
                        className = 'filterDevices-button' 
                />
            </div>
        </form>
    )

}