import React from "react"
import './Step1.css'

function Step1(){
    return(
        <form className='personal'>
          <h1 className='title'>Personal info</h1>
          <h2 className='subtitle'>Please provide your name, email address, and phone number.</h2>
          <div className='inputBox'>
            <div className='personalInputBox'>
              <label className='labels personalLabels' htmlFor="name">Name</label>
              <input type="text" id='name' name='name' required className='inputs personalInputs' placeholder="e.g. Stephen King"/>
            </div>
            <div className='personalInputBox'>
              <label className='labels personalLabels' htmlFor="email">Email Address</label>
              <input type="email" id='email' name='email' required className='inputs personalInputs' placeholder="e.g. stephenking@lorem.com"/>
            </div>
            <div className='personalInputBox'>
              <label className='labels personalLabels' htmlFor="number">Phone Number</label>
              <input type="tel" id='number' name='number' required className='inputs personalInputs' placeholder="e.g. +1 234 567 890"/>
            </div>
          </div>
        </form>
    )
}
export {Step1}