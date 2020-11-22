import React from "react";
import "./Dropdown.css"

function Dropdown (props){
    return <div className = "dropdown">
             <div class="dropdown">
                  <button class="dropbtn">Dropdown</button>
                  <div class="dropdown-content">
                     <a href="#">Rice Pudding buried Once</a>
                      <a href="#">Rice Pudding buried Twice</a>
                     <a href="#">Rice Pudding buried Three times</a>
                 </div>
              </div>
            </div>
    

}


export default Dropdown;


