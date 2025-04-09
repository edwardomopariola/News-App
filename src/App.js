import { useState } from 'react';
import SearchNews from './Components/SearchNews';
import NewsFeed from './Components/NewsFeed';
import Skeleton from './Components/Skeleton';
import PopularNews from './Components/PopularNews';


function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state when the user searches for news
  };



    return (
      <div className='container'>
        <h1 className='welcome-message'> Welcome to the news of the day!!!</h1>
        <SearchNews onSearch={handleSearch} /> {/* Pass the handleSearch function to the SearchNews component */}
        <NewsFeed searchQuery={searchQuery} /> {/* Pass the search query to the NewsFeed component */}
        <PopularNews /> {/* Render the PopularNews component */}
        <Skeleton times={5} className="h-10 w-full" /> {/* Show skeleton loading effect */}
        
        {searchQuery && <Skeleton times={5} className="h-10 w-full" />} {/* Show skeleton loading effect if search query is present */}
    
      </div>
    );
}
  
  export default App;
