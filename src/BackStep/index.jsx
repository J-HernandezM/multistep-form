import React from "react";
import './BackStep.css'

function BackStep({currentStep, setCurrentStep}){
    return(
        <button className="next back" onClick={()=>{
            if(currentStep<=4 && currentStep>1){
                let newStep = currentStep-1
                setCurrentStep(newStep)
            }
          }}>Go Back</button>
    )
}
export { BackStep }