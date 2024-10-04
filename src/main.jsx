import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TestPage from "./pages/TestPage.jsx";

import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import MoviesContextProvider from "./context/MoviesContextProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MoviesContextProvider>
        <HomePage />
      </MoviesContextProvider>
    ),
  },
  {
    path: "/test",
    element: (
      <MoviesContextProvider>
        <TestPage />
      </MoviesContextProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
