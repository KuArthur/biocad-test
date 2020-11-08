import logo from './logo.svg';
import './App.css';

import DeviceInfo from './components/DeviceInfo/DeviceInfo'
import CalibrationReport from './components/CalibrationReport/CalibrationReport';
import UnitName from './components/UnitName/UnitName';

import {calibrationReport as calibrationData} from './db/calibrationReport';
import { deviceInfo } from './db/deviceInfo';

import item from './img/item.svg';

const NAME = 'Аналитические весы OHAUS Adventurer АХ324 (B715976163)';

function App() {
  
  return(
    // <DeviceInfo device ={deviceInfo} />
    // <CalibrationReport calibrationData = {calibrationData} />
    <UnitName name = {NAME}
              img = {item}
    />
  )
}

export default App;
