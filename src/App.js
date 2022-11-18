import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';

let flag = 0
function App() {
  const [State, SetState] = useState("Enable")
  const [mode, setMode] = useState('light');
  const [textmode, setTextMode] = useState('dark');
  const [alert, SetAlert] = useState(null)
  const showAlert = (message, type)=>{
      SetAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        SetAlert(null)
      },1500);
  }
  const changegreen = ()=>{
    document.body.style.backgroundColor = '#35C649'
  }
  const changeyellow = ()=>{
    document.body.style.backgroundColor = '#CAB911'
  }
  const changered = ()=>{
    document.body.style.backgroundColor = '#C15031'
  }
  const toggleswitch = ()=>{
    if(mode === 'light'){
      setMode('dark');
        document.body.style.backgroundColor = 'rgb(13 17 86)'
      document.body.style.color = 'white'
      SetState('Disable')
      showAlert("Dark Mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#212529'
      SetState('Enable')
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (
    <>
    <Navbar title="Home" about="About" State={State} mode={mode} toggleswitch={toggleswitch} changegreen={changegreen} changered={changered} changeyellow={changeyellow}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Textform showAlert={showAlert} mode={mode} heading="Enter the Text here."/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
