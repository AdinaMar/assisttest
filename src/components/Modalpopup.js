import React from 'react'
import { useState} from 'react';
import '../style/Popup.css';
const Modalpopup = (props) => {



 return (props.trigger) ? (
    <div className="popup"> 
    <div className="popup-inner">
    
        <button className="delete">YES</button>
        <button className="close-btn" onClick= {() => props.setTrigger(false)}> NO</button>
        {props.children}
        </div>
        </div>
  ) : "";
}

export default Modalpopup