import { useState } from 'react';
import SearchNews from "./Components/SearchNews";
import NewsFeed from "./Components/NewsFeed"; // Importing the NewsFeed component
// import Skeleton from './Components/Skeleton';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query 
  
  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state
  
  };
  return (
    <div className="App">
      <h1>Welcome to the news of the day</h1>

      <SearchNews onSearch={handleSearch} /> {/* This is a component that allows users to search for news articles */}
      <NewsFeed searchQuery={searchQuery} /> {/*This is a component that displays the news articles based on the search query*/}
        
    </div>

  );
}

export default App;