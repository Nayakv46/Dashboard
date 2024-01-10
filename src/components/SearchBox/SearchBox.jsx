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
            class="searchBox__input"
            required type="text"
            id="searchBox"
            onChange={handleChange}
            value={searchValue}
        />
        <label class="searchBox__label" for="searchBox">Search</label>
        <IoIosSearch
            className="searchBox__icon"
            onClick={() => {
                if(searchValue !== ""){
                    alert("Sorry, it's just a design, so we cannot find what you're looking for.")
                }
            }}
        />
    </div>
  )
}

export default SearchBox