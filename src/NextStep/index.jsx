import React from "react";
import './NextStep.css'

function NextStep({currentStep, setCurrentStep, plan, user}){
    let regexA = /^[a-zA-Z]+([a-zA-Z']+([ -][a-zA-Z]+)*){2,}$/
    let regexB = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    let regexC = /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    return(
        <button className="next" onClick={()=>{
            if(currentStep===1){
                if(user){
                    if(!user.name || !user.email || !user.number){
                        alert('You have to complete all the fields')
                    }else if (user.name&&user.email&&user.number){
                        if(!regexA.test(user.name)||!regexB.test(user.email)||!regexC.test(user.number)){
                            alert('Please verify all the fields')
                        }else{
                            let newStep = currentStep+1
                            setCurrentStep(newStep)
                        }
                    }
                }else{
                    alert('You have to complete all the fields')
                }
            }
            //verify if plan selected
            if(currentStep===2){
                if(!plan){
                    alert('You have to choose a plan')
                }else{
                    let newStep = currentStep+1
                    setCurrentStep(newStep)
                }
            }
            if(currentStep<4 && currentStep>=1 && currentStep!==2 && currentStep!==1){
                let newStep = currentStep+1
                setCurrentStep(newStep)
            }
            
          }}>Next Step</button>
    )
}
export { NextStep }