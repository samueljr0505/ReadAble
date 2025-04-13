import React from 'react';
import '../styling/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search books..." />
    </div>
  );
};

export default SearchBar;