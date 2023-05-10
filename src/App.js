import logo from './logo.svg';
import './App.css';
import {Link, Routes, Route} from 'react-router-dom'
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Form/>}/>
        <Route path='/people/:apiID' element ={<People/>}/>
        <Route path='/planets/:apiID' element ={<Planets/>}/>
      </Routes>
    </div>
  );
}

export default App;
