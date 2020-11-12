import React, { useState, useEffect } from 'react';

import './App.css';

import DeviceInfo from './components/DeviceInfo/DeviceInfo'
import CalibrationReport from './components/CalibrationReport/CalibrationReport';
import UnitName from './components/UnitName/UnitName';
import FilterDevices from './components/FilterDevices/FilterDevices';

import ReportFilters from './components/ReportFilters/ReportFilters';
// import DropList from './components/DropList/DropList';


// import {calibrationReport as calibrationData} from './db/calibrationReport';
import { deviceInfo } from './db/deviceInfo';

import item from './img/item.svg';


const checkboxCaptions = ['Calibration', 'Measuring', 'Using'];

const options = [
  {key: 1, value: '1 month'},
  {key: 2, value: '2 month'},
  {key: 3, value: '3 month'},
  {key: 4, value: '4 month'}
]

function App() {
  const defaultDevice = Object.values(deviceInfo)[0];
  const [filterText, setFilterText] = useState(defaultDevice.tam);
  const [device, setDevice] = useState(defaultDevice);

  function handleFilterTextChange(filterText) {
    setFilterText(filterText)
  }

  // useEffect(() => {
  //   for (let device of deviceInfo) {
  //     if (device.tam === filterText || device.guid === filterText || device.bims_id === filterText) {
  //       setDevice(device);
        
  //     }
  //   }
  // })

  function handleDeviceChange(e) {
    for (let device of deviceInfo) {
      if (device.tam === filterText || device.guid === filterText || device.bims_id === filterText) {
        setDevice(device);
        
      }
    }
  }

  return (
    // слишком большая вложенность div'ов?

    //TODO : deviceinfo.forEach(device => (для каждого device рендерить страницу)) - нужно будет менять практически везде код
    // потому что практически в каждом компоненте делаю перебор массива deviceInfo
    <div className = 'app'>
      <div className = 'app-top'>
        <div className = 'app-leftColumn'>
          <div className = 'app-filterDevices'>
          <FilterDevices  filterText = {filterText}
                          onFilterTextChange = {handleFilterTextChange}
                          onDeviceChange = {handleDeviceChange}
          />
          </div>
          <div className = 'app-unitName'>
            <UnitName device = {device}
                      img = {item}
            />
          </div>
          
          <ReportFilters />
        </div>
        <div className = 'app-rightColumn'>
          <DeviceInfo device ={device} />
        </div>
      </div>
      <div className = 'app-bottom'>
        <CalibrationReport calibrationData = {device.calibrationReport} />
      </div>
    </div>
    // <DropList options = {options}/>
  )
}

export default App;
