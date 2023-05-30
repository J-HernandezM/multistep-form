import React from 'react'
import './App.css'
import { Header } from '../Header'
import { SidebarDesk } from '../SidebarDesk'
import { SidebarMob } from '../SidebarMob'
import { Personal } from '../Personal'
import { MainBox } from '../MainBox'

function App() {

  return (
    <>
      <Header>
        <SidebarDesk />
        <SidebarMob />
      </Header>
      <MainBox>
        <Personal />
      </MainBox>

        <button>Next Step</button>

    </>
  )
}

export default App
