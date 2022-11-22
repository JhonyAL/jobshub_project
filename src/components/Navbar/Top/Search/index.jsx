import React, { useState, useEffect } from "react"
import { TfiSearch } from 'react-icons/tfi'

export default function Search() {
    const [search, setSearch] = useState('')
    const [classIcon, setClassIcon] = useState('searchIcon')

    const searchOpen = () => {
        let input = document.querySelector(".searchInput")
        input.style.display = 'block'
        setClassIcon('searchIconActive')
        console.log("asaaa")
    }

    const searchClose = () => {
        const input = document.querySelector(".searchInput")
        input.style.display = 'none'
        setClassIcon('searchIcon')
        console.log("bbbbb")
    }

    return (
        <label className="search" onClick={searchOpen}>
            <TfiSearch idclassname="searchIcon" className={classIcon} />
            <input type="text" className='searchInput' value={search} onBlur={searchClose} onChange={(e) => {
                setSearch(e.target.value)
            }}/>
        </label>
    )
}