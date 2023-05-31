import React from "react";
import './NextStep.css'

function NextStep({currentStep, setCurrentStep}){
    return(
        <button className="next" onClick={()=>{
            if(currentStep<4 && currentStep>=1){
                let newStep = currentStep+1
                setCurrentStep(newStep)
            }
          }}>Next Step</button>
    )
}
export { NextStep }