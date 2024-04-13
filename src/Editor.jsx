import { useAuth0 } from "@auth0/auth0-react";

const Editor = () => {
    const { isAuthenticated } = useAuth0();
    const { loginWithRedirect } = useAuth0();
  return (
    <div>
    {isAuthenticated ? (
          <h1>
          Logout
          </h1>
      ) : (
        <meta http-equiv = "refresh" content = {"url=" + loginWithRedirect()} />
      )}
      </div>
  );
};

export default Editor;
