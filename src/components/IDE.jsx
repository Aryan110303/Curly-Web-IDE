import EditorBtn from "./EditorBtn";
import { User, useAuth0 } from "@auth0/auth0-react";

const IDE = () => {
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    return (
        <div>
            <h1>Welcome, {user.nickname}</h1>
            <h4>Your email is: {user.email}</h4>
<EditorBtn  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Logout
</EditorBtn>
</div>
    )
}
export default IDE;