import React from "react"
import './Step2.css'
import ArcadeSVG from "../assets/images/icon-arcade.svg"
import AdvancedSVG from "../assets/images/icon-advanced.svg"
import ProSVG from "../assets/images/icon-pro.svg"
import { ChangeBilling } from "./ChangeBilling"

function Step2({yearly, setYearly}){
    return(
            <form className='plan'>
                <h1 className='title'>Select your plan</h1>
                <h2 className='subtitle'>You have the option of monthly or yearly billing.</h2>
                <div className='inputBox'>
                    <input type="radio" id='arcade' name='billingPlan' required className='inputs planInputs'/>
                    <label className='labels planLabels' htmlFor="arcade">
                        <img className="svg planIcons" src={ArcadeSVG} alt="arcade plan" />
                        <div className="planLabels--textWrap textWrap">
                            <span className="inputTitle planLabels--title">Arcade</span>
                            <p className="inputDescription planPrice">$9/mo</p>
                            <span className="monthsfree inactive">2 months free</span>
                        </div>
                    </label>
                
                    <input type="radio" id='advanced' name='billingPlan' required className='inputs planInputs'/>
                    <label className='labels planLabels' htmlFor="advanced">
                        <img className="svg planIcons" src={AdvancedSVG} alt="advanced plan" />
                        <div className="planLabels--textWrap textWrap">
                            <span className="inputTitle planLabels--title">Advanced</span>
                            <span className="monthsfree inactive">2 months free</span>
                            <p className="inputDescription planPrice">$12/mo</p>
                        </div>
                    </label>

                    <input type="radio" id='pro' name='billingPlan' required className='inputs planInputs'/>
                    <label className='labels planLabels' htmlFor="pro">
                        <img className="svg planIcons" src={ProSVG} alt="pro plan" />
                        <div className="planLabels--textWrap textWrap">
                            <span className="inputTitle planLabels--title">Pro</span>
                            <span className="monthsfree inactive">2 months free</span>
                            <p className="inputDescription planPrice">$15/mo</p>
                        </div>
                    </label>
                </div>
                <ChangeBilling 
                    yearly={yearly}
                    setYearly={setYearly}
                />
            </form>
    )
}
export {Step2}  