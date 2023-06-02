import React from "react";
import './NextStep.css'

function NextStep({currentStep, setCurrentStep, plan}){
    return(
        <button className="next" onClick={()=>{
            //verify if plan selected
            if(currentStep===2){
                if(!plan){
                    alert('You have to choose a plan')
                }else{
                    let newStep = currentStep+1
                    setCurrentStep(newStep)
                }
            }
            if(currentStep<4 && currentStep>=1 && currentStep!==2){
                let newStep = currentStep+1
                setCurrentStep(newStep)
            }
            
          }}>Next Step</button>
    )
}
export { NextStep }