import React from "react";

function AddonStructure({addon, yearly}){
    
    return(
            <div className="selectedAddon">
                <div className="finalBilling--addon--left">
                    <p className="addon--title">{addon.title}</p>
                </div>
                <button></button>
                <p className="finalBilling--addon--right">+${yearly?addon.price*10:addon.price}/mo</p>
            </div>
    )
    
}
export {AddonStructure}