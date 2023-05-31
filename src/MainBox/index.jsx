import React from "react"
import './MainBox.css'

function MainBox({children}){
    return(
        <main>
            {children}
        </main>
    )
}
export {MainBox}