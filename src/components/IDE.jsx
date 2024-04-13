import EditorBtn from "./EditorBtn";
import { User, useAuth0 } from "@auth0/auth0-react";
import Sidebar from "./ide/Sidebar";
import Topbar from "./ide/Topbar";
import Code from "./ide/Code";
import Terminal from "./ide/Terminal";

const IDE = () => {
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        <div className="master-container overflow-hidden">
            <Sidebar />
            <Topbar />
            <Code />
            <Terminal />
        </div>
    )
}
export default IDE;


{/* <h1>Welcome, {user.nickname}</h1>
            <h4>Your email is: {user.email}</h4>
<EditorBtn  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Logout
</EditorBtn> */}
            