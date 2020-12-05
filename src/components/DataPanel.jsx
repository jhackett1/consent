import React from "react"

const DataPanel = ({
    header,
    children,
    footer
}) => 
    <>
        {header &&
            <header className="ct-data-panel__header">
                {header}
            </header>
        }
        
        {children}

        <footer className="ct-data-panel__footer">
            <p>Version 0.1 — Thank you for using Consent</p>
            {footer}
        </footer>
    </>

export default DataPanel