import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart.tsx";
import Layout from "./Components/Layout/Layout.tsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/sky/",
    element: <Layout />,
    children: [
      { path: "/sky/", element: <App /> },
      { path: "/sky/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
