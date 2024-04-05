import React from "react";
const Button2 = ({ className, href, onClick, children, px, white }) => {
  const classes = `glow-button`;
  const spanClasses = "";

  const renderButton = () => (
    <button class={classes}>
      <span class={spanClasses}>Button</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button2;
