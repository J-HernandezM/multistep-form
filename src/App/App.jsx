import React from 'react'
import './App.css'
import { SidebarDesk } from '../SidebarDesk'
import { SidebarMob } from '../SidebarMob'
import { Header } from '../Header'
import { MainBox } from '../MainBox'
import { FooterBox } from '../FooterBox'
import { NextStep } from '../NextStep'
import { BackStep } from '../BackStep'
import { Step1 } from '../Step1'
import { Step2 } from '../Step2'
import { Step3 } from '../Step3'
import { Step4 } from '../Step4'

const stepInformation = {
  step1:{
    title:'Personal info',
    description:'Please provide your name, email address, and phone number.',
    component:'Personal'
  },
  step2:{
    title:'Select your plan',
    description:'You have the option of monthly or yearly billing.',
    component:'Plan'
  },
  step3:{
    title:'Pick add-ons',
    description:'Add-ons help enhance your gaming experience.',
    component:'Addons'
  },
  step4:{
    title:'Finishing up',
    description:'Double-check everything looks OK before confirming.',
    component:'Finish'
  }
}

function App() {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [yearly, setYearly] = React.useState(false)
  const [addons, setAddons] = React.useState([])
  const [plan, setPlan] = React.useState()
  const [user, setUser] = React.useState()


  return (
    <>
      <Header>
        <SidebarDesk />
        <SidebarMob currentStep={currentStep}/>
      </Header>
      <MainBox>
        {currentStep===1 && <Step1 
          user={user}
          setUser={setUser}
        />}
        {currentStep===2 && <Step2 
          yearly={yearly}
          setYearly={setYearly}
          setPlan={setPlan}
          plan={plan}
        />}
        {currentStep===3 && <Step3 
          addons={addons}
          setAddons={setAddons}
        />}
        {currentStep===4 && <Step4 
          yearly={yearly}
          plan={plan}
          addons={addons}
          setCurrentStep={setCurrentStep}
        />}
      </MainBox>
      <FooterBox currentStep={currentStep}>
        {currentStep>1 && <BackStep 
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />}
        <NextStep 
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          plan={plan}
        />
      </FooterBox>
    </>
  )
}

export default App
