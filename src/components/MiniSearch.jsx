import React from "react"
import close from "../assets/close.svg"

const MiniSearch = ({
    placeholder,
    value,
    onChange
}) =>
    <div className="ct-mini-search ct-field">
        <label 
            className="ct-visually-hidden"
            htmlFor="search"
        > 
            Search
        </label>
        <input
            value={value} 
            type="search"
            id="search"
            onChange={e => onChange(e.target.value)} 
            placeholder={placeholder || "Search..."}
        />
        {value && 
            <button 
                class="ct-mini-search__clear"
                onClick={() => onChange("")}
            >
                <img src={close} alt="Clear" title="Clear search"/>
            </button>
        }
    </div>

export default MiniSearch