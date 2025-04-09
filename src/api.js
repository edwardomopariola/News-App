import axios from "axios";

const API_KEY = "9d3f0e550db9405eaef87d257bca0a90";

export const fetchTopNews = async () => {
    const response = await axios.get("https://newsapi.org/v2/top-headlines", {   // Fetch top news articles from the API
        params: {
            country: 'us', // Specify the country for the news articles
            apiKey: API_KEY, // Include the API key for authentication
        },
    })    
       
    return response.data.articles; // Return the articles from the response
};


export const fetchNewsByQuery = async (query) => {
    const response = await axios.get("https://newsapi.org/v2/everything", {   // Fetch news articles based on the search query
        params: {
            q: query, // Include the search query in the request parameters
            apiKey: API_KEY, // Include the API key for authentication
        },
    });
    
    return response.data.articles; // Return the articles from the response
};