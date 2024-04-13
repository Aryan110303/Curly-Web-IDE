import React from "react";
import ReactDOM from "react-dom/client";
import createRoot from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
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
        <Auth0Provider
    domain="dev-6jf50i3o4tbq4h72.us.auth0.com"
    clientId="CZh6VnNOjRfiXEo9Nj1NW2Wk0tEJH32P"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <App />
      </Auth0Provider>
  </React.StrictMode>
    )
      },
      {
        path: "editor",
        element: (
            <React.StrictMode>
              <Auth0Provider
    domain="dev-6jf50i3o4tbq4h72.us.auth0.com"
    clientId="CZh6VnNOjRfiXEo9Nj1NW2Wk0tEJH32P"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
                <Editor />
              </Auth0Provider>
            </React.StrictMode>
        )
      }
])

ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
    );


