import React from "react";
import './ChangeBilling.css'
function ChangeBilling({yearly, setYearly}){
    function printingFunction(event) {
        if(event.target.tagName==='SPAN'){
            !yearly?setYearly(true):setYearly(false)
        }
      }
    
    return(
        <div className="changeBilling">
            <p className={`${!yearly?'billingType-checked':'billingType'}`}>Monthly</p>
            <label className="switch" onClick={printingFunction}>
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <p className={`${yearly?'billingType-checked':'billingType'}`}>Yearly</p>
        </div>
    )
}

export { ChangeBilling }