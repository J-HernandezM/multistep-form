import React from "react";
import './ChangeBilling.css'
function ChangeBilling({yearly, setYearly, plan, setPlan}){
    function printingFunction(event) {
        if(event.target.tagName==='SPAN'){
            !yearly?setYearly(true):setYearly(false)
        }
    }
    function updatePlanIfYearlyChanges(event){
        if(plan){
            let updatePlan = {...plan}
            const inputsAndLabels = [...event.target.parentElement.parentElement.previousSibling.childNodes]
            let checked
            inputsAndLabels.forEach((element)=>{
                if(element.checked){
                    checked = element
                }
            })
            let newPrice
            if(checked){
                const indexOfChecked = inputsAndLabels.indexOf(checked)
                newPrice = inputsAndLabels[indexOfChecked+1].childNodes[1].childNodes[1].innerHTML

            }else{
                console.log('No seleccionaste ningun plan')
            }
            updatePlan.price = newPrice
            setPlan(updatePlan)
    }
    }
    
    return(
        <div className="changeBilling">
            <p className={`${!yearly?'billingType-checked':'billingType'}`}>Monthly</p>
            <label className="switch" onClick={(event)=>{
                let evento = event
                printingFunction(evento)
                updatePlanIfYearlyChanges(evento)
                }}>
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <p className={`${yearly?'billingType-checked':'billingType'}`}>Yearly</p>
        </div>
    )
}

export { ChangeBilling }