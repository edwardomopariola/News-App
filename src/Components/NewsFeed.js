import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const API_KEY = "9d3f0e550db9405eaef87d257bca0a90"; // Replace with your actual API key

function NewsFeed() {
    const [articles, setArticles] = useState([]); // State to hold the news articles
    const [isLoading, setisLoading] = useState(false); // State to indicate loading status
    const [error, setError] = useState(null); // State to hold any error messages

    useEffect(() => {
        fetchNews("latest"); // Fetch news articles when the component mounts with a default query "latest"
    }
    , []);

    const fetchNews = async (query) => {
        setisLoading(true); // Set loading to true when fetching news
        setError(null); // Reset error state

        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`); // Fetch news articles based on the search query
            if (!response.ok) {
                throw new Error(`Failed to fetch news articles${response.status}`); // Throw an error if the response is not ok
            }
            const data = await response.json(); // Parse the response data as JSON
            setArticles(data.articles); // Update the articles state with the fetched articles
        } catch (error) {
            setError(error.message); // Set error message if an error occurs
        } finally {
            setisLoading(false); // Set loading to false after fetching news
        }
    };

    

    let content;  // Variable to hold the content to be displayed

    if (isLoading) {
        content = <Skeleton times={5} className="h-10 w-full" />; // Show skeleton loading effect while fetching news
    } else if (error) {
        content = <div>Error: {error}</div>; // Show error message if an error occurs
    } else if (articles.length === 0) {
        content = <div>No articles found</div>; // Show message if no articles are found
    } else {
        content = (
            <ul>
                {articles.map((article, index) => (   //map through the articles array and render each article as a list item
                    <li key={index}>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

  return (
    <div>
      <h1>Top News</h1>
        {content} {/* Render the content based on loading, error, or articles state */}
    </div>
  );
}


export default NewsFeed; // Export the NewsFeed component for use in other parts of the application