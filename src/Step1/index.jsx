import React, { useEffect } from "react"
import './Step1.css'
let nameMsg = 'This field is required'
let regularMsg = 'Wrong format'

function Step1({user, setUser}){
  let nameRef = React.useRef(null)
  let emailRef = React.useRef(null)
  let numberRef = React.useRef(null)
  let nameRef2 = React.useRef(null)
  let emailRef2 = React.useRef(null)
  let numberRef2 = React.useRef(null)
  useEffect(checkPreviousSelections,[])
  function checkPreviousSelections(){
    if(user){
      if (user.name&&user.email&&user.number){
        nameRef.current.value=user.name
        emailRef.current.value=user.email
        numberRef.current.value=user.number
      }
    }
  }
  function inputValidation(event){
    let regex
    let actualRef
    let spanRef
    let msg
    if(event.target.id==='name'){
      regex = /^[a-zA-Z]+([a-zA-Z']+([ -][a-zA-Z]+)*){2,}$/
      actualRef = nameRef
      spanRef = nameRef2
      msg = nameMsg
    }else if(event.target.id==='email'){
      regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
      actualRef = emailRef
      spanRef = emailRef2
      msg = regularMsg

    }else if(event.target.id==='number'){
      regex = /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
      actualRef = numberRef
      spanRef = numberRef2
      msg = regularMsg
    }
    const value = event.target.value
    const isValid = regex.test(value)
    if(!isValid){
      actualRef.current.classList.add('invalid')
      spanRef.current.innerHTML=msg
    }else{
      actualRef.current.classList.remove('invalid')
      spanRef.current.innerHTML=''
    }
    let newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      number: numberRef.current.value
    }
    setUser(newUser)
  }
    return(
        <form className='personal'>
          <h1 className='title'>Personal info</h1>
          <h2 className='subtitle'>Please provide your name, email address, and phone number.</h2>
          <div className='inputBox'>
            <div className='personalInputBox'>
              <div className="labelBox">
                <label className='personalLabels' htmlFor="name">Name</label>
                <span ref={nameRef2} id='nameSpan' className="errorMessage"></span>
              </div>
              <input ref={nameRef} aria-describedby="nameSpan" type="text" id='name' name='name' required className='personalInputs' placeholder="e.g. Stephen King" onBlur={inputValidation}/>
            </div>
            <div className='personalInputBox'>
              <div className="labelBox">
                <label className='personalLabels' htmlFor="email">Email Address</label>
                <span ref={emailRef2} id='emailSpan' className="errorMessage"></span>
              </div>
              <input ref={emailRef} aria-describedby="emailSpan" type="email" id='email' name='email' required className='personalInputs' placeholder="e.g. stephenking@lorem.com" onBlur={inputValidation}/>
            </div>
            <div className='personalInputBox'>
              <div className="labelBox">
                <label className='personalLabels' htmlFor="number">Phone Number</label>
                <span ref={numberRef2} id='phoneSpan' className="errorMessage"></span>
              </div>
              <input ref={numberRef} aria-describedby="phoneSpan" type="tel" id='number' name='number' required className='personalInputs' placeholder="e.g. +1 234 567 890" onBlur={inputValidation}/>
            </div>
          </div>
        </form>
    )
}
export {Step1}