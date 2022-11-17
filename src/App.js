import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';


function App() {
  return (
    <>
    <Navbar title="Home" about="About"/>
    <div className='container my-3'>
    <Textform heading="Enter the Text here."/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
