import React from 'react'
import  ReactDOM  from 'react-dom/client';
import logo from "./src/assets/logo.png"

const Header=()=>{
  return(
    <div className='headet'>
           <div>
             <img src={logo}></img>
           </div>
    </div>
  )
}

const App =() =>{
 return (
  <>
   

  </>
 )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render([parent, heading]);


