import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import { useState } from 'react';


function App() {
  const [State, SetState] = useState("Enable")
  const [mode, setMode] = useState('light');
  const [textmode, setTextMode] = useState('dark');
  const toggleswitch = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(13 17 86)'
      document.body.style.color = 'white'
      SetState('Disable')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#212529'
      SetState('Enable')
    }
  }
  return (
    <>
    <Navbar title="Home" about="About" State={State} mode={mode} toggleswitch={toggleswitch}/>
    <div className='container my-3'>
    <Textform mode={mode} heading="Enter the Text here."/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
