import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import googleIcon from "../../../images/google.png";
import NavbarHeader from "../../Shared/NavbarHeader/NavbarHeader";
import firebaseConfig from "../firebase.config";
import "./Login.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const provider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        const user = result.user;
        console.log(user);
        const { displayName, email } = user;
        const newUserInfo = { ...loggedInUser };
        newUserInfo.name = displayName;
        newUserInfo.email = email;
        newUserInfo.isSignedIn = true;
        newUserInfo.success = true;
        setLoggedInUser(newUserInfo);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <section style={{ backgroundColor: "#091022", height: "1000px" }}>
      <NavbarHeader></NavbarHeader>
      <div className="login-btn container text-center">
        {loggedInUser.isSignedIn ? (
          <h2 style={{fontWeight: "700" }} className="text-white text-center">You are already logged In</h2>
        ) : (
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="btn btn-custom"
          >
            <img
              style={{ width: "25px", marginRight: "0.2em" }}
              src={googleIcon}
              alt="googleIcon"
            />{" "}
            Login With Google
          </button>
        )}
      </div>
    </section>
  );
};

export default Login;
