import React from "react"
import './Step4.css'
import { AddonStructure } from "./AddonStructure"

function Step4({plan, addons, yearly, setCurrentStep}){
  let totaladdonsPrice = 0
  addons.map((addon)=>{
    totaladdonsPrice += Number(addon.price)
  })
  let rawPrice = Number(plan?.price.substring(1).split('/')[0])
  let totalPrice
  if(!yearly){
    totalPrice = rawPrice + totaladdonsPrice
  }else{
    totalPrice = rawPrice + (totaladdonsPrice*10)
  }
  
    return(
    <form className='finishing'>
      <h1 className='title'>Finishing up</h1>
      <h2 className='subtitle'>Double-check everything looks OK before confirming.</h2>
      <div className='finalBilling'>
        <div className={`finalBilling--plan ${addons.length===0?'noaddons':''}`}>
          <div className="finalBilling--plan--left">
            <p className="plan--title">{plan?.title?plan.title:'Plan'} (<span className="title--bill">{yearly?'Yearly':'Monthly'}</span>)</p>
            <p className="plan--change" onClick={()=>{setCurrentStep(2)}}>Change</p>
          </div>
          <p className="finalBilling--plan--right">{plan?.price?plan.price:'$20/mo'}</p>
        </div>
        <div className="finalBilling--addon">
          {addons.map(addon => {
            return(
              <AddonStructure
                key={addon.id}
                addon={addon}
                yearly={yearly}
              />
            )
          })}
        </div>
      </div>
      <div className="totalPrice">
        <p className="totalPrice--title">Total (per<span className="totalBill"> {yearly?'year':'month'}</span>)</p>
        <p className="totalPrice--final">${totalPrice}/{yearly?'yr':'mo'}</p>
      </div>
    </form>
    )
}
export {Step4} 
