import React, { useState } from 'react';

import './App.css';

import DeviceInfo from './components/DeviceInfo/DeviceInfo'
import CalibrationReport from './components/CalibrationReport/CalibrationReport';
import UnitName from './components/UnitName/UnitName';
import FilterDevices from './components/FilterDevices/FilterDevices';

import ReportFilters from './components/ReportFilters/ReportFilters';

import { deviceInfo } from './db/deviceInfo';

function App() {
  const defaultDevice = deviceInfo[0];
  const [filterText, setFilterText] = useState(defaultDevice.tam);
  const [device, setDevice] = useState(defaultDevice);

  function handleFilterTextChange(filterText) {
    setFilterText(filterText)
  }

  function handleDeviceChange(e) {
    for (let device of deviceInfo) {
      if ([device.tam,device.guid,device.bims_id].includes(filterText)) {
        setDevice(device);
      }
    }
  }

  return (
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
                      img = {device.img}
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
  )
}

export default App;
