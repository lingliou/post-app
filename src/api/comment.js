const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// Function to fetch comments for a specific post by post ID
export const fetchCommentsForPost = async (postId) => {
    try {
        const response = await fetch(
            `${API_BASE_URL}/posts/${postId}/comments`
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error;
    }
};
