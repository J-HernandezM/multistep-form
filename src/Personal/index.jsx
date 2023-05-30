import React from "react"

function Personal(){
    return(
        <form className='personal'>
          <h1 className='title'>Personal info</h1>
          <h1 className='subtitle'>Please provide your name, email address, and phone number.</h1>
          <div className='inputBox'>
            <div className='eachInput'>
              <label className='labels personalLabels' htmlFor="name">Name</label>
              <input type="text" id='name' name='name' required className='inputs personalInputs'/>
            </div>
            <div className='eachInput'>
              <label className='labels personalLabels' htmlFor="email">Email Address</label>
              <input type="email" id='email' name='email' required className='inputs personalInputs'/>
            </div>
            <div className='eachInput'>
              <label className='labels personalLabels' htmlFor="number">Phone Number</label>
              <input type="tel" id='number' name='number' required className='inputs personalInputs'/>
            </div>
          </div>
        </form>
    )
}
export {Personal}