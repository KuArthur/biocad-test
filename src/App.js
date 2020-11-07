import logo from './logo.svg';
import './App.css';

import DeviceInfo from './components/DeviceInfo/DeviceInfo'
import CalibrationReport from './components/CalibrationReport/CalibrationReport';

import {calibrationReport as calibrationData} from './db/calibrationReport';
import { deviceInfo } from './db/deviceInfo';


function App() {
  
  return(
    // <DeviceInfo device ={deviceInfo} />
    <CalibrationReport calibrationData = {calibrationData} />
  )
}

export default App;
