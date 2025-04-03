import React, { useState } from 'react';

function SearchNews({ onSearch }) {
  const [news, setNews] = useState('');   // State to hold the search query

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    onSearch(news);  // Call the searchQuery function passed as a prop with the current news state
    setNews(''); // Clear the input field after search

  };

  return (
    <div className="search-news">
      <input
        type="text"
        placeholder="Search news..."
        value={news}
        onChange={(e) => setNews(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchNews;