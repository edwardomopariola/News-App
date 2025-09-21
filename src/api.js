import axios from "axios"; // Importing axios for making HTTP requests

const API_KEY = "9d3f0e550db9405eaef87d257bca0a90";

// Function to fetch top news articles
export const fetchTopNews = async () => {
    const response = await axios.get("/api/news", {   // Fetch top news articles from the API
        params: {
            country: 'us', // Specify the country for the news articles
            // apiKey: API_KEY, // Include the API key for authentication
        },
    });
    return response.data.articles; // Return the articles from the response
};

// Function to fetch news articles based on a search query
export const fetchNewsByQuery = async (query) => {
    const response = await axios.get("/api/news", {   // Fetch news articles based on the search query
        params: {
            q: query, // Include the search query in the request parameters
            // apiKey: API_KEY, // Include the API key for authentication
        },
    });
    return response.data.articles; // Return the articles from the response
};