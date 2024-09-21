import React from 'react';

const Search = ({ setSearchTerm }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <h1>Pokémon</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
