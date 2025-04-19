import { useState } from 'react';
import SearchNews from './Components/SearchNews';
import NewsFeed from './Components/NewsFeed';
import PopularNews from './Components/PopularNews';
import './index.css'; // Importing CSS for styling the application


function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state when the user searches for news
  };

  return (
    <div className='container'> {/* Main container for the application */}
      <h1>News App</h1> {/* Header for the application */}
      <h1> Welcome to the news of the day!!!</h1>
      <SearchNews onSearch={handleSearch} /> {/* Pass the handleSearch function to the SearchNews component */}
      <div className='display-flex'> {/* Container for displaying news articles */}
        <PopularNews className="popular"/> {/* Render the PopularNews component */}
        <NewsFeed className="news-feed" searchQuery={searchQuery} /> {/* Pass the search query to the NewsFeed component */}
      </div>
    </div>
  );
}

export default App;
