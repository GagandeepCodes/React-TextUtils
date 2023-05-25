import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {BrowserRouter, Route,Routes} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');//whether the dark mode is enabled or not.
  const [alert,setAlert] = useState(null);
  //function which helps to show alerts
  //type  - types of the alert
  //message - the message to pass through the alert
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 2500);

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode Enabled" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled","success");
    }
  }
  return (
      <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode} />
         <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={ <TextForm showAlert = {showAlert} heading="TextArea" mode={mode}/>} />
          </Routes>
        </div>
        </BrowserRouter>
      </>
  );
}

export default App;
