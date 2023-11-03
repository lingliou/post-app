// // PostCard.test.js
// import React from "react";
// import { render, screen } from "@testing-library/react";
// import PostCard from "../components/PostCard";
// import { BrowserRouter } from "react-router-dom";

// describe("PostCard", () => {
//     it("renders with the correct title and body", () => {
//         const title = "Sample Post Title";
//         const body = "This is the body of the sample post.";
//         const id = 1;

//         render(
//             <BrowserRouter>
//                 <PostCard title={title} body={body} id={id} />
//             </BrowserRouter>
//         );

//         // Check if the component renders with the correct title and body
//         expect(screen.getByText(title)).toBeInTheDocument();
//         expect(screen.getByText(body)).toBeInTheDocument();
//     });

//     it("truncates long titles and bodies", () => {
//         const title =
//             "This is a very long post title that needs to be truncated";
//         const body =
//             "This is a very long post body that needs to be truncated as well.";
//         const id = 2;

//         render(
//             <BrowserRouter>
//                 <PostCard title={title} body={body} id={id} />
//             </BrowserRouter>
//         );

//         // Check if the component truncates long titles and bodies
//         expect(
//             screen.getByText("This is a very long post title...")
//         ).toBeInTheDocument();
//         expect(
//             screen.getByText("This is a very long post body that...")
//         ).toBeInTheDocument();
//     });

//     it("renders the 'Read More' button with the correct link", () => {
//         const title = "Sample Post Title";
//         const body = "This is the body of the sample post.";
//         const id = 3;

//         render(
//             <BrowserRouter>
//                 <PostCard title={title} body={body} id={id} />
//             </BrowserRouter>
//         );

//         // Check if the 'Read More' button is rendered with the correct link
//         const readMoreButton = screen.getByText("Read More");
//         expect(readMoreButton).toBeInTheDocument();
//         expect(readMoreButton).toHaveAttribute("href", `/posts/${id}`);
//     });
// });
