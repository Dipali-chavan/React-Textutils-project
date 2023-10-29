
import React ,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import Alert from './components/Alert';

//import{
 // BrowserRouter as  Router,
  //Switch,
  //Route,
  //Link
//}from "react-router-dom";


function App() 
{
const[mode, setMode] = useState('light'); //wheather darkmode is enabled or not
const[alert,setAlert] = useState(null);
const showAlert = (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })

  setTimeout(()=>
  {
    setAlert(null);
  },3000);

}
const toggleMode = ()=>
{
  if(mode === 'light')
{  
  setMode('dark');
  document.body.style.backgroundColor ="grey";
  showAlert("dark mode anabled" , "success");
  document.title = 'Textutils darkmode';
  setInterval(()=> {
    document.title ='Textutils is amazing mode';
  },2000);
}
else{
  setMode('light');
  document.body.style.backgroundColor ="white";
  showAlert("light mode anabled" , "success");
  document.title ='Textutils is amazing mode';
}

}
  return (
       <>
      
    <Navbar title ="Textutils" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert = {alert}/>

    <div className="container my-3">
      
         
        
       
     
        
          
   <TextForm showAlert={showAlert} heading = "Enter text to analyse below"/>
          
      
    
   
    
    </div>

      </>
       
  );
}

export default App;
