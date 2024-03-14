import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart/Cart.tsx";
import Layout from "./Components/Layout/Layout.tsx";
import "./index.scss";
import "./Nullable.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
