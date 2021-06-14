import React, { useState, useEffect, createContext } from 'react'

const DarkModeContext = createContext([])

function DarkModeProvider(props) {
    const key = 'darkMode-/n24sM.E1P-#,_2|B8g40:,fHqPTr#K&T+~cq]Lp@?l'
    const [darkMode, setDarkMode] = useState((localStorage.getItem(key)==='true') || false)

    useEffect(() => {
        localStorage.setItem(key , darkMode)
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

DarkModeProvider.context = DarkModeContext

export default DarkModeProvider