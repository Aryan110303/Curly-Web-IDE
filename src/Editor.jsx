import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/Login";
import EditorBtn from "./components/EditorBtn";


const Editor = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
    {isAuthenticated ? (
        <>
          <EditorBtn  linkTo="/">
              Back
          </EditorBtn>
        </>
      ) : (
        <meta http-equiv = "refresh" content = {"url=" + loginWithRedirect()} />
      )}
      </div>
  );
};

export default Editor;
