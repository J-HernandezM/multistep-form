import React from "react"
import './SidebarDesk.css'

function SidebarDesk({currentStep}){
    return(
        <ul className='sidebarDesk'>
                <div className="steps">
                    <li className={currentStep===1?'steped':''}>1</li>
                    <div className='stepBox-info'>
                    <p className="stepTitle">STEP 1</p>
                    <p className="stepDescription">YOUR INFO</p>
                    </div>
                </div>
                <div className="steps">
                    <li className={currentStep===2?'steped':''}>2</li>
                    <div className='stepBox-info'>
                    <p className="stepTitle">STEP 2</p>
                    <p className="stepDescription">SELECT PLAN</p>
                    </div>
                </div>
                <div className="steps">
                    <li className={currentStep===3?'steped':''}>3</li>
                    <div className='stepBox-info'>
                    <p className="stepTitle">STEP 3</p>
                    <p className="stepDescription">ADD-ONS</p>
                    </div>
                </div>
                <div className="steps">
                    <li className={`${currentStep===5?'steped':''} ${currentStep===4?'steped':''}`}>4</li>
                    <div className='stepBox-info'>
                    <p className="stepTitle">STEP 4</p>
                    <p className="stepDescription">SUMMARY</p>
                    </div>
                </div>
        </ul>
    )
}

export {SidebarDesk}