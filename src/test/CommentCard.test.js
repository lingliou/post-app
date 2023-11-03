import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store"; // Use your actual Redux store configuration
import CommentCard from "../components/CommentCard";

const initialState = {
    likes: {},
};

const mockStore = configureStore([]);

describe("CommentCard Component", () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    test("it renders a comment card with the provided data", () => {
        const { container } = render(
            <Provider store={store}>
                <CommentCard
                    name="John Doe"
                    body="This is a comment."
                    email="john@example.com"
                    postId={1}
                    commentId={1}
                />
            </Provider>
        );

        // Check if the comment data is displayed
        expect(screen.getByText("This is a comment.")).toBeInTheDocument();
        expect(screen.getByText("john@example.com")).toBeInTheDocument();

        // Ensure that the Like button is present
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    test("it toggles the like button when clicked", () => {
        const { container } = render(
            <Provider store={store}>
                <CommentCard
                    name="Jane Smith"
                    body="Another comment here."
                    email="jane@example.com"
                    postId={2}
                    commentId={2}
                />
            </Provider>
        );

        // Get the Like button
        const likeButton = screen.getByRole("checkbox");

        // Initially, it should not be checked
        expect(likeButton).not.toBeChecked();

        // Click the Like button
        fireEvent.click(likeButton);

        // Now, it should be checked
        expect(likeButton).toBeChecked();

        // Click it again to unlike
        fireEvent.click(likeButton);

        // Now, it should not be checked again
        expect(likeButton).not.toBeChecked();
    });
});
