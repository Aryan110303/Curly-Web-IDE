import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import Button from "./Button";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();



  if (isLoading) {
    return <div>Please Wait...</div>;
  }

  return (
    <div className="flex justify-center align-center">
    {isAuthenticated ? (
      <>
        <img className="profile-img" width={50} height={50} src={user.picture} alt="User Profile" />
        <h2 className="align-middle">Profile</h2>
      </>
    ) : (
   
           <LoginButton>Try it!</LoginButton>
    )}
  </div>
  );
};

export default Profile;