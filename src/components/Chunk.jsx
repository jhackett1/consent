import React from "react"
import { Link } from "react-router-dom"

const Chunk = ({
    title,
    count,
    links,
    children
}) => 
    <section className="ct-data-chunk">
        <header className="ct-data-chunk__header">
            <h2 className="ct-data-chunk__title">
                {title} 
                {count && <span className="ct-data-chunk__count">({count})</span>}
            </h2>
            {links}
        </header>
        {children}
    </section>

export default Chunk