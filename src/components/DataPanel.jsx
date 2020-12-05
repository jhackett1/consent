import React from "react"

const DataPanel = ({
    header,
    children,
    footer
}) => 
    <>
        <header className="ct-datapanel__header">
            {header}
        </header>
        
        {children}

        <footer className="ct-datapanel__footer">
            <p>Version 0.1 — Thank you for using Consent</p>
            {footer}
        </footer>
    </>

export default DataPanel