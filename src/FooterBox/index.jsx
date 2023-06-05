import React from "react"
import './FooterBox.css'

function FooterBox({children, currentStep }){
    return(
        <footer className={currentStep>1?"hasGoBack":"footerClass"}>
            {children}
        </footer>
    )
}

export { FooterBox } 