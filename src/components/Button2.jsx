import React from "react";
const Button2 = ({ className, href, onClick, children, px, white }) => {
  const spanClasses = "";

  const renderButton = () => (
    <button className={className}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href}>
      <button className={className}>
      <span className={spanClasses}>{children}</span>
    </button>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button2;
