import React, { useState } from 'react';

import './App.css';

import DeviceInfo from './components/DeviceInfo/DeviceInfo'
import CalibrationReport from './components/CalibrationReport/CalibrationReport';
import UnitName from './components/UnitName/UnitName';
import FilterDevices from './components/FilterDevices/FilterDevices';
import ReportFiltersCheckbox from './components/ReportFilters/ReportFiltersCheckbox/ReportFiltersCheckbox';

import {calibrationReport as calibrationData} from './db/calibrationReport';
import { deviceInfo } from './db/deviceInfo';

import item from './img/item.svg';

const NAME = 'Аналитические весы OHAUS Adventurer АХ324 (B715976163)';

function App() {
  const [filterText, setFilterText] = useState('A-001234');
  
  function handleFilterTextChange(filterText) {
    setFilterText(filterText)
  }
  return (
    // <DeviceInfo device ={deviceInfo} />
     <CalibrationReport calibrationData = {calibrationData} />
    // <UnitName name = {NAME}
    //           img = {item}
    // />
    // <FilterDevices  filterText = {filterText}
    //                 onFilterTextChange = {handleFilterTextChange}

    // />
    // <ReportFiltersCheckbox text = 'Calibration' />
  )
}

export default App;
