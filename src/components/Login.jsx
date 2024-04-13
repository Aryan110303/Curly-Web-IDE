import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "./Button";

const LoginButton = ({children}) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button onClick={() => loginWithRedirect()}>
      {children}
  </Button>
  )
};

export default LoginButton;