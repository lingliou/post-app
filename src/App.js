import * as React from "react";
import Home from "./pages/Home";
import { createHashRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NoFound";
import PostDetail from "./pages/PostDetail";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "posts/:postId",
        element: <PostDetail />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
