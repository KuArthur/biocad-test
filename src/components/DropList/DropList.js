import React, {useState} from 'react';

import './DropList.css';

import icon from '../../img/droplist-icon.svg'

export default function DropList(props) {
    const options = props.options;
    
    const [opened, setOpen] = useState(false);
    const [selected,setSelect] = useState(options[0].value);

    let classMod = opened ? 'show' : 'hide';

    function handleOpen() {
        setOpen(!opened)
    }

    function handleSelect(option) {
        setSelect(option);
        return setOpen(false)
        
    }

    let items = options.map((option) => (
        <DropListMenuItem   key = {option.key}
                            option = {option}
                            onSelect = {handleSelect}
                            
        />
    ))
    
    return (
        <div className ='dropList'>
            <div    className="dropList-input"
                    onClick = {handleOpen}
            >
               <span>{selected}</span>
               <img src={icon} alt='' />
            </div>
            <ul className = {'dropList-menu--' + classMod}>
                {items}
            </ul>
        </div>
    )
}

function DropListMenuItem(props) {
    const option = props.option;

    function handleSelect() {
       return props.onSelect(option.value)
    }

    return (
        <li className = 'dropList-item' onClick = {handleSelect}>{option.value}</li>
    )
}