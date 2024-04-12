import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Editor from "./Editor"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.StrictMode>
      <App />
  </React.StrictMode>
    )
      },
      {
        path: "/editor",
        element: (
            <React.StrictMode>
                <Editor />
            </React.StrictMode>
        )
      }
])

ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
    );


