import { useState } from 'react';
import SearchNews from './Components/SearchNews';
import NewsFeed from './Components/NewsFeed';
import Skeleton from './Components/Skeleton';


function App() {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state when the user searches for news
  };



    return (
      <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold mb-4'> Welcome to the news of the day!!!</h1>
        <h2 className='text-xl font-semibold mb-4'>Search for news articles:</h2>
        <SearchNews onSearch={handleSearch} /> {/* Pass the handleSearch function to the SearchNews component */}
        <NewsFeed searchQuery={searchQuery} /> {/* Pass the search query to the NewsFeed component */}
        
        {searchQuery && <Skeleton times={5} className="h-10 w-full" />} {/* Show skeleton loading effect if search query is present */}
    
      </div>
    );
}
  
  export default App;
