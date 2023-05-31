import React from "react";
import './ChangeBilling.css'

function ChangeBilling(){
    return(
        <div className="changeBilling">
            <p className="billingType billingType-checked">Monthly</p>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <p className="billingType billingType-checked">Yearly</p>
        </div>
    )
}

export { ChangeBilling }