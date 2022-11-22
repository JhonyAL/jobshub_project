import React, { useState, useEffect } from "react"
import { TfiSearch } from 'react-icons/tfi'

export default function Search() {
    const [search, setSearch] = useState('')

    return (
        <div className="search">
            <TfiSearch className="searchIcon"/>
            <input type="text" value={search} onChange={(e) => {
                setSearch(e.target.value)
            }}/>
        </div>
    )
}