const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Function to fetch a list of posts
export const fetchPosts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/posts`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};
