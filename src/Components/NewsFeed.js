import { useEffect, useState } from "react";

const API_KEY = "9d3f0e550db9405eaef87d257bca0a90"; // Replace with your actual API key

function NewsFeed() {
    const [articles, setArticles] = useState([]); // State to hold the news articles
    const [loading, setLoading] = useState(false); // State to indicate loading status
    const [error, setError] = useState(null); // State to hold any error messages

    const fetchNews = async (query) => {
        setLoading(true); // Set loading to true when fetching news
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
            setLoading(false); // Set loading to false after fetching news
        }
    };

    useEffect(() => {
        fetchNews("latest"); // Fetch news articles when the component mounts with a default query "latest"
    }
    , []);

    if (loading) {
        return <div>Loading...</div>; // Show loading message while fetching news
    }
    if (error) {
        return <div>Error fetching articles</div>; // Show error message if an error occurs
    }   

  return (
    <div>
      <h1>Top News</h1>
      <ul>
        {articles.map((article, index) => (   //map through the articles array and render each article as a list item
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default NewsFeed; // Export the NewsFeed component for use in other parts of the application