
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navber from './components/Navber';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type)=>{
    setAlert({
      msg: massage,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
      if(mode === "light"){
        setMode("dark")
        document.body.style.backgroundColor = "black"
        showAlert("Dark mood has been enable", "success")
        document.title = "TextUtils - DarkMode"
      }
      else{
        setMode("light")
        document.body.style.backgroundColor = "white"
        showAlert("Light mood has been enable", "success")
        document.title = "TextUtils - LightMode"
      }
  }
  return (
    <>
    <Router>
    <Navber title="TextUtils" aboutt="About Us" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
    {/* <Navber/> */}

    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About/>}>
          
          </Route>
          
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analize" mode={mode}/>}>
         
          </Route>
        </Routes>
  
    </div>
    {/* <About/> */}
    </Router>
    </>
  );
}

export default App;
