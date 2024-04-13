import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Fail = () => {
    const { loginWithRedirect } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
      }
    return (
        <meta http-equiv = "refresh" content = {"url=" + loginWithRedirect()} />
    )
}
export default Fail;