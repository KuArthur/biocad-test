import React from 'react';

import './FilterDevices.css';

export default function FilterDevices(props) {
    const filterText = props.filterText;
    
    function handleFilterTextChange(e) {
        return props.onFilterTextChange(e.target.value);
    }

    return (
        <div className = 'FilterDevices'>
            <form>
                <input  type = 'text'
                        value = {filterText}
                        onChange = {handleFilterTextChange}
                />
                <input type = 'submit'> Search </input>
            </form>
            
        </div>
    )

}