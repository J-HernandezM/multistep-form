import React from "react"
import { preprocessCSS } from "vite"

function Header({children}){
    return(
        <header>
            {children}
        </header>
    )
}

export {Header}