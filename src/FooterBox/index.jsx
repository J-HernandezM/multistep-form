import React from "react"
import './FooterBox.css'

function FooterBox({children}){
    return(
        <footer>
            {children}
        </footer>
    )
}

export { FooterBox } 