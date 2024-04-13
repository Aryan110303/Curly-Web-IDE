import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/Login";
import EditorBtn from "./components/EditorBtn";


const Editor = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
          <EditorBtn  linkTo="/">
              Back
          </EditorBtn>
      </div>
  );
};

export default Editor;
