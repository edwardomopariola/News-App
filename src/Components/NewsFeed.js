import { useState, useEffect } from "react";
import { fetchTopNews, fetchNewsByQuery } from "../api"; // Importing functions to fetch news articles from the API
import "./NewsFeed.css"; // Importing CSS for styling the component


function NewsFeed({ searchQuery }) { // The NewsFeed component takes a query prop to fetch news articles based on the search query
    const [articles, setArticles] = useState([]); // State to hold the news articles
    const [isLoading, setisLoading] = useState(false); // State to indicate loading status
    const [error, setError] = useState(null); // State to hold any error messages

    useEffect(() => {
      const getNews = async () => {
        setisLoading(true); // Set loading status to true before fetching data
        // setError(null); // Reset error state before fetching data
        let data;
        if (searchQuery) { // Check if there is a search query
          data = await fetchNewsByQuery(searchQuery); // Fetch news articles based on the search query
        } else {
            data = await fetchTopNews(); // Fetch top news articles if no query is provided
        }
        if (!data) {
          setError("No articles found"); // Set error message if no data is returned
        } else {
          setArticles(data); // Update the articles state with the fetched data
          setError(null); // Reset error state if data is fetched successfully
        }
        setisLoading(false); // Set loading status to false after fetching data
      };

      getNews(); // Call the function to fetch news articles
    }, [searchQuery]); // Dependency array to re-run the effect when the query changes
    // console.log("Query received in NewsFeed:", query);

    // condition to check if data is still loading or if there is an error
    if (isLoading) {
        return <div>Loading...</div>; // Show loading message while fetching data
    }
    if (error) {
        return <div>Error: {error}</div>; // Show error message if there is an error
    }

    return (
        <div className="news-feed"> {/* Container for the news articles */}
            <h1 className="h1"> Top-New</h1>
            {articles.map((article, index) => ( // Map through the articles and render each one
                <div key={index} className="article"> {/* Unique key for each article */}
                  <h1 className="article-title">{article.title}</h1> {/* Article title */}
                  <img className="article-image" src={article.urlToImage} alt={article.title} /> {/* Article image */}
                  <h2 className="article-source-name">{article.source.name}</h2> {/* Article source name */}
                  <p className="article-published">{article.publishedAt}</p>  {/* Article published date */}
                  <p className="article-author">{article.author}</p> {/* Article author */}
                  <p className="article-description">{article.description}</p> {/* Article description */}
                  <a className="article-link" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a> {/* Link to read more */}
                </div>
            ))}
        </div>
    );
}


export default NewsFeed; // Export the NewsFeed component for use in other parts of the application