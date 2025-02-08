import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from Font Awesome

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement your search logic here
        console.log('Searching for:', searchTerm);
    };

    return (
        <form onSubmit={handleSearch} className=" mobilesearch">
            <div className="input-group d-flex justify-content-center">
                <input
                    type="search"
                    className="form-control controls"
                    placeholder="Enter title of product here"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ borderRadius: '0.5rem' }}
                />
                <button className="btn d-inline-flex" type="submit">
                    <FaSearch className='text-secondary border-0  d-inline-flex search' />
                </button>
            </div>
        </form>
    );
};

export default SearchBar;