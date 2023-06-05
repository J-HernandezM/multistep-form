import React from "react"
import './Step5.css'
import ThanksSVG from "../assets/images/icon-thank-you.svg"

function Step5(){
    return(
    <form className='thanks'>
       <img className="svg thanksIcons" src={ThanksSVG} alt="arcade plan" /> 
      <h1 className='title'>Thank you!</h1>
      <h2 className='subtitle thanksSubtitle'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</h2>
    </form>
    )
}
export {Step5} 
