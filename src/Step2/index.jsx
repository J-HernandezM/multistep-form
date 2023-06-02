import React, { useRef } from "react"
import './Step2.css'
import ArcadeSVG from "../assets/images/icon-arcade.svg"
import AdvancedSVG from "../assets/images/icon-advanced.svg"
import ProSVG from "../assets/images/icon-pro.svg"
import { ChangeBilling } from "./ChangeBilling"


function Step2({yearly, setYearly, setPlan, plan}){
    let refArcade = React.useRef(null)
    let refAdvanced = React.useRef(null)
    let refPro = React.useRef(null)
    const allRefs = [refArcade, refAdvanced, refPro]
    React.useEffect(checkPreviousSelections, [])
    function checkPreviousSelections(){
        console.log('test');
        if(plan){
            const found = allRefs.find(referencia=>{
                if(plan.id===referencia.current.id){
                    return referencia
                }
            })
            found.current.checked=true
        }
    }
    function selectPlan(event){
        if(event.target.classList.contains('planInputs')){
            const idPlan = event.target.id
            const pricePlan = event.target.nextSibling.childNodes[1].childNodes[1].innerHTML
            const titlePlan = event.target.nextSibling.childNodes[1].childNodes[0].innerHTML
            const newPlanEntry = {
                title: titlePlan,
                id: idPlan,
                price: pricePlan
            }
            setPlan(newPlanEntry)
        }
    }
    return(
            <form className='plan' onClick={selectPlan}>
                <h1 className='title'>Select your plan</h1>
                <h2 className='subtitle'>You have the option of monthly or yearly billing.</h2>
                <div className='inputBox'>
                    <input ref={refArcade} type="radio" id='arcade' name='billingPlan' required className='inputs planInputs'/>
                    <label className='labels planLabels' htmlFor="arcade">
                        <img className="svg planIcons" src={ArcadeSVG} alt="arcade plan" />
                        <div className={`planLabels--textWrap textWrap ${yearly?'wrapExpanded':''}`}>
                            <span className="inputTitle planLabels--title">Arcade</span>
                            <p className="inputDescription planPrice">{!yearly?'$9/mo':'$90/yr'}</p>
                            <span className={`monthsfree ${!yearly?'inactive':''}`}>2 months free</span>
                        </div>
                    </label>
                
                    <input ref={refAdvanced} type="radio" id='advanced' name='billingPlan' required className='inputs planInputs'/>
                    <label className='labels planLabels' htmlFor="advanced">
                        <img className="svg planIcons" src={AdvancedSVG} alt="advanced plan" />
                        <div className={`planLabels--textWrap textWrap ${yearly?'wrapExpanded':''}`}>
                            <span className="inputTitle planLabels--title">Advanced</span>
                            <p className="inputDescription planPrice">{!yearly?'$12/mo':'$120/yr'}</p>
                            <span className={`monthsfree ${!yearly?'inactive':''}`}>2 months free</span>
                        </div>
                    </label>

                    <input ref={refPro} type="radio" id='pro' name='billingPlan' required className='inputs planInputs'/>
                    <label className='labels planLabels' htmlFor="pro">
                        <img className="svg planIcons" src={ProSVG} alt="pro plan" />
                        <div className={`planLabels--textWrap textWrap ${yearly?'wrapExpanded':''}`}>
                            <span className="inputTitle planLabels--title">Pro</span>
                            <p className="inputDescription planPrice">{!yearly?'$15/mo':'$150/yr'}</p>
                            <span className={`monthsfree ${!yearly?'inactive':''}`}>2 months free</span>
                        </div>
                    </label>
                </div>
                <ChangeBilling 
                    yearly={yearly}
                    setYearly={setYearly}
                    setPlan={setPlan}
                    plan={plan}
                />
            </form>
    )
}
export {Step2}  