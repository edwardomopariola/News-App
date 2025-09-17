import { useState, useEffect } from "react";
import axios from "axios"; // Importing axios for making HTTP requests
import "./PopularNews.css"; // Importing CSS for styling the component


function PopularNews() { // This component fetches and displays popular news articles
  const [popularNews, setPopularNews] = useState([]);   // State to hold the popular news articles
  const [isLoading, setIsLoading] = useState(false);  // State to indicate loading status
  const [error, setError] = useState(null);   // State to hold any error messages

  useEffect(() => {
    const fetchPopularNews = async () => {
      setIsLoading(true); // Set loading status to true before fetching data
      setError(null); // Reset error state before fetching data
      const response = await axios.get("https://newsapi.org/v2/everything", {  // Fetch news articles based on the search query
        params: {
          q: 'news', // Search query for popular news articles
          sortBy: 'popularity', // Sort the articles by popularity
          apiKey: '9d3f0e550db9405eaef87d257bca0a90', // API key for authentication
        },
      });
      setPopularNews(response.data.articles); // Update the popular news state with the fetched data
      
      setIsLoading(false); // Set loading to false after fetching data
    }

    fetchPopularNews(); // Call the function to fetch popular news articles
  }, []); // Empty dependency array to run the effect only once on component mount

  // condition to check if data is still loading or if there is an error
  if (isLoading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }
  if (error) {
    return <div>Error: {error}</div>; // Show error message if there is an error
  }

  return (
    <div className="popular-news"> {/* Container for popular news articles */}
      <h1 className="h1">Popular News</h1> {/* Title for popular news section */}
        {popularNews.length > 0 ? (
          popularNews.map((article, index) => ( // Map through the popular news articles and render each one
            <div key={index} className="article"> {/* Unique key for each article */}
              <h3 className="article-title">{article.title}</h3> {/* Article title */}
              <img className="article-image" src={article.urlToImage} alt={article.title} /> {/* Article image */}
              <h4 className="article-source-name">{article.source.name}</h4> {/* Article source name */}
              <p className="article-published">{new Date(article.publishedAt).toLocaleDateString()}</p>  {/* Article published date */}
              <p className="article-author">{article.author}</p> {/* Article author */}
              <p className="article-description">{article.description}</p> {/* Article description */}
              <a className="article-link" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a> {/* Link to read more */}
            </div>
          ))
        ) : (
            <div>No popular news articles found</div> // Show message if no popular news articles are found
        )}
    </div>  
  );
}

export default PopularNews;
// This component displays a list of popular news articles. It can be expanded to fetch real data from an API or a database.