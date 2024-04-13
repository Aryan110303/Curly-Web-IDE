import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
  
const EditorBtn = ({ className, href, onClick, children, px, white, linkTo }) => {
  const spanClasses = "";

  const renderButton = () => (
    <Link to={linkTo}>
    <button className="editor-button p-2 pl-4 pr-4" onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
    </Link>
  );

  const renderLink = () => (
    <a href={href}>
      <button className="editor-button">
      <span className={spanClasses}>{children}</span>
    </button>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default EditorBtn;