import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/Login";
import Button from "./components/Button";


const Editor = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
    {isAuthenticated ? (
        <>
          <Button linkTo="/">
              Back
          </Button>
        </>
      ) : (
     
             <LoginButton>Try it!</LoginButton>
      )}
      </div>
  );
};

export default Editor;
