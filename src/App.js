import React, { useState } from 'react';

import './App.css';

import DeviceInfo from './components/DeviceInfo/DeviceInfo'
import CalibrationReport from './components/CalibrationReport/CalibrationReport';
import UnitName from './components/UnitName/UnitName';
import FilterDevices from './components/FilterDevices/FilterDevices';
// import ReportFiltersCheckbox from './components/ReportFilters/ReportFiltersCheckbox/ReportFiltersCheckbox';
// import ReportFiltersButton from './components/ReportFilters/ReportFiltersButton/ReportFiltersButton';
import ReportFilters from './components/ReportFilters/ReportFilters';
import DropList from './components/DropList/DropList';


import {calibrationReport as calibrationData} from './db/calibrationReport';
import { deviceInfo } from './db/deviceInfo';

import item from './img/item.svg';

const NAME = 'Аналитические весы OHAUS Adventurer АХ324 (B715976163)';

const checkboxCaptions = ['Calibration', 'Measuring', 'Using'];

const options = [
  {key: 1, value: '1 month'},
  {key: 2, value: '2 month'},
  {key: 3, value: '3 month'},
  {key: 4, value: '4 month'}
]

function App() {
  const [filterText, setFilterText] = useState('A-001234');
  
  function handleFilterTextChange(filterText) {
    setFilterText(filterText)
  }
  return (
    // <DeviceInfo device ={deviceInfo} />
    //  <CalibrationReport calibrationData = {calibrationData} />
    // <UnitName name = {NAME}
    //           img = {item}
    // />
    // <FilterDevices  filterText = {filterText}
    //                 onFilterTextChange = {handleFilterTextChange}

    // />
    
    // <div className = 'ReportFiltersCheckboxes'>
    //   <ReportFiltersCheckbox text = 'Calibration' />
    //   <ReportFiltersCheckbox text = 'Calibration' />
    //   <ReportFiltersCheckbox text = 'Calibration' />
    // </div>
    // <ReportFilters />
    // <DropList options = {options}/>
  )
}

export default App;
