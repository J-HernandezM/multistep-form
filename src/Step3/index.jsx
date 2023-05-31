import React from "react"
import './Step3.css'

function Step3(){
    return(
            <form className='pick'>
                <h1 className='title'>Pick add-ons</h1>
                <h2 className='subtitle'>Add-ons help enhance your gaming experience.</h2>
                <div className='inputBox'>
                    <div className='eachInput'>
                        <input type="checkbox" id='online' name='online' className='inputs pickInputs'/>
                        <label htmlFor="online">
                            <p className="labelTitle">Online service</p>
                            <p className="labelDescription">Access to multiplayer games</p>
                        </label>
                        <p className="price">+$1/mo</p>
                    </div>
                    <div className='eachInput'>
                        <input type="checkbox" id='storage' name='storage' className='inputs pickInputs'/>
                        <label htmlFor="storage">
                            <p className="labelTitle">Larger storage</p>
                            <p className="labelDescription">Extra 1TB of cloud save</p>
                        
                        </label>
                        <p className="price">+$2/mo</p>
                    </div>
                    <div className='eachInput'>
                        <input type="checkbox" id='profile' name='profile' className='inputs pickInputs'/>
                        <label htmlFor="profile">
                            <p className="labelTitle">Customizable profile</p>
                            <p className="labelDescription">Custom theme on your profile</p>
                        </label>
                        <p className="price">+$2/mo</p>
                    </div>
                </div>
            </form>
    )
}
export {Step3}