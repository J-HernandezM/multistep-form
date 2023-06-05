import React from "react"
import './SidebarMob.css';

function SidebarMob({currentStep}){
    return(
          <div className='sidebarMob'>
                <li className={currentStep===1?'steped':''}>1</li>
                <li className={currentStep===2?'steped':''}>2</li>
                <li className={currentStep===3?'steped':''}>3</li>
                <li className={currentStep===4||5?'steped':''}>4</li>
          </div>
    )
}

export {SidebarMob}