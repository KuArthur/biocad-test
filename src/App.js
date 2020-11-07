import logo from './logo.svg';
import './App.css';

import DeviceInfo from './components/DeviceInfo/DeviceInfo'
import { deviceInfo } from './db/deviceInfo';


function App() {
  
  return(
    <DeviceInfo device ={deviceInfo} />
  )
}

export default App;
