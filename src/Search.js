import React from 'react'
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";

function Search() {
    return (
        <div className="header__search">
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon" />
        </div>
    )
}

export default Search
