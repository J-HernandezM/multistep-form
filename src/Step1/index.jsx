import React from "react"
import './Step1.css'

function Step1({user, setUser}){
  function test(){
    console.log('test');
  }
    return(
        <form className='personal'>
          <h1 className='title'>Personal info</h1>
          <h2 className='subtitle'>Please provide your name, email address, and phone number.</h2>
          <div className='inputBox'>
            <div className='personalInputBox'>
              <label className='personalLabels' htmlFor="name">Name</label>
              <input aria-describedby="nameSpan" type="text" id='name' name='name' required className='personalInputs' placeholder="e.g. Stephen King" onBlur={test}/>
              <span pattern="^[a-zA-Z]+([a-zA-Z']+([ -][a-zA-Z]+)*)*$" id='nameSpan' className="errorMessage"></span>
            </div>
            <div className='personalInputBox'>
              <label className='personalLabels' htmlFor="email">Email Address</label>
              <input aria-describedby="emailSpan" type="email" id='email' name='email' required className='personalInputs' placeholder="e.g. stephenking@lorem.com"/>
              <span pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id='emailSpan' className="errorMessage"></span>
            </div>
            <div className='personalInputBox'>
              <label className='personalLabels' htmlFor="number">Phone Number</label>
              <input aria-describedby="phoneSpan" type="tel" id='number' name='number' required className='personalInputs' placeholder="e.g. +1 234 567 890"/>
              <span pattern="^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$" id='phoneSpan' className="errorMessage"></span>
            </div>
          </div>
        </form>
    )
}
export {Step1}