import React from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from Font Awesome

const SearchBar = ({value, onChange}) => {
    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSearch} className=" mobilesearch">
            <div className="input-group d-inline-flex d-flex justify-content-center">
                <input
                    type="search"
                    className="form-control controls"
                    placeholder="Enter title of product here"
                    aria-label="Search"
                    value={value}
                    onChange={onChange}
                    style={{ borderRadius: '0.5rem' }}
                />
                <button className="btn searchbtn" type="submit">
                    <FaSearch className='text-secondary border-0  d-inline-flex search' />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;