import { useState, useEffect } from "react";
import axios from "axios"; // Importing axios for making HTTP requests


function PopularNews() { // This component fetches and displays popular news articles
    const [popularNews, setPopularNews] = useState([]);   // State to hold the popular news articles
    const [isLoading, setIsLoading] = useState(false);  // State to indicate loading status
    const [error, setError] = useState(null);   // State to hold any error messages

    useEffect(() => {
      const fetchPopularNews = async () => {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=9d3f0e550db9405eaef87d257bca0a90");
        // console.log("Response from API:", response); // Log the response from the API
        const filterdNews = response.data.articles.filter((article) => article.popularity && article.popularity > 1000); // Filter articles based on popularity
        setPopularNews(filterdNews); // Set the filtered articles to the state
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
      <h1>Popular News</h1> {/* Title for popular news section */}
        {popularNews.map((article, index) => ( // Map through the popular news articles and render each one
          <div key={index} className="article"> {/* Unique key for each article */}
            <h3>{article.title}</h3> {/* Article title */}
            <p>{article.description}</p> {/* Article description */}
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a> {/* Link to read more */}
          </div>
        ))}
      </div>
    );
}

export default PopularNews;
// This component displays a list of popular news articles. It can be expanded to fetch real data from an API or a database.