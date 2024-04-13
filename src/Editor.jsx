import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import IDE from "./components/IDE";
import Fail from "./components/Fail";


const Editor = () => {
    const { isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
    {isAuthenticated ? (
        <IDE />
      ) : (
        // <Fail />
        <IDE />
      )}
      </div>
  );
};

export default Editor;
