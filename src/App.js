import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import image from './images/img.png';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
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
    <BrowserRouter>
    <Navbar Link={Link} title="Home" about="About" State={State} mode={mode} toggleswitch={toggleswitch} changegreen={changegreen} changered={changered} changeyellow={changeyellow} image={image}/>
    <Alert alert={alert}/>
    <Routes>
    <Route path='/' element={<div className='container my-3'><Textform showAlert={showAlert} mode={mode} heading="Enter the Text here."/></div>}/>
    <Route path='/about' element={<About mode={mode}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;
