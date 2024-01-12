import { useState } from 'react';

import './searchBox.scss';

import { IoIosSearch } from 'react-icons/io';

const SearchBox = () => {

    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

  return (
    <div className="searchBox__wrapper">
        <input
            className="searchBox__input"
            required type="text"
            id="searchBox"
            onChange={handleChange}
            value={searchValue}
        />
        <label className="searchBox__label" htmlFor="searchBox">Search</label>
        <IoIosSearch
            className="searchBox__icon"
            onClick={() => {
                    alert("Sorry, it's just a design, so we cannot find what you're looking for. \nBut you can check out the statistics changing with opening other games!");
            }}
        />
    </div>
  )
}

export default SearchBox