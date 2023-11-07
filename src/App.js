import React,{useState} from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {

  const [mode,setMode] = useState('light')
  const [modeName,setModeName] = useState('Enable Dark mode')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      setModeName('Enable light mode')
      document.body.style.backgroundColor = 'black';
    }else{
      setMode('light')
      setModeName('Enable dark mode')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
       <Navbar title="Text Utils" text="I am home" mode={mode} modeName={modeName} toggleMode={toggleMode}/>
       <div className="container my-3">
        <TextForm heading="Enter data here..." />
       </div> 
      {/* <About /> */}
    </>
  );
}

export default App;
