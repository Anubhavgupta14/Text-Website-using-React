import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {
  return (
    <>
    <Navbar title="Home" about="About"/>
    <div className='container my-3'>
    <Textform heading="Enter the Text here."/>
    </div>
    </>
  );
}

export default App;
