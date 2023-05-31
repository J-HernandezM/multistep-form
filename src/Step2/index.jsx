import React from "react"
import './Step2.css'
import ArcadeSVG from "../assets/images/icon-arcade.svg"
import AdvancedSVG from "../assets/images/icon-advanced.svg"
import ProSVG from "../assets/images/icon-pro.svg"
import { ChangeBilling } from "./ChangeBilling"

function Step2(){
    return(
            <form className='plan'>
                <h1 className='title'>Select your plan</h1>
                <h2 className='subtitle'>You have the option of monthly or yearly billing.</h2>
                <div className='inputBox'>
                    <div className='eachInput'>
                        <img src={ArcadeSVG} alt="arcade plan" />
                        <label className='labels planLabels' htmlFor="arcade">Arcade</label>
                        <input type="radio" id='arcade' name='billingPlan' required className='inputs planInputs'/>
                        <p className="price">20$</p>
                        <span className="monthsfree inactive">2 months free</span>
                    </div>
                    <div className='eachInput'>
                        <img src={AdvancedSVG} alt="advanced plan" />
                        <label className='labels planLabels' htmlFor="advanced">Advanced</label>
                        <input type="radio" id='advanced' name='billingPlan' required className='inputs planInputs'/>
                        <p className="price">20$</p>
                        <span className="monthsfree inactive">2 months free</span>
                    </div>
                    <div className='eachInput'>
                        <img src={ProSVG} alt="pro plan" />
                        <label className='labels planLabels' htmlFor="pro">Pro</label>
                        <input type="radio" id='pro' name='billingPlan' required className='inputs planInputs'/>
                        <p className="price">20$</p>
                        <span className="monthsfree inactive">2 months free</span>
                    </div>
                </div>
                <ChangeBilling />
            </form>
    )
}
export {Step2}  