import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/Login";
import Fail from "./components/Fail";
import IDE from "./components/IDE";


const Editor = () => {
    const {isAuthenticated} = useAuth0();
  return (
    <div>
    {isAuthenticated ? (
          <IDE />
      ) : (
        <Fail />
      )}
      </div>
  );
};

export default Editor;
