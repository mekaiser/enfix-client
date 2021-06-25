import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import "./NavbarHeader.css";

const NavbarHeader = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Hi');
        const newUserInfo = { ...loggedInUser };
        newUserInfo.name = "";
        newUserInfo.email = "";
        newUserInfo.isSignedIn = false;
        newUserInfo.success = false;
        console.log(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav style={{ margin: "0em 10vw" }}>
      <Navbar className="navbar-custom" expand="lg">
        <Navbar.Brand>
          <Link className="navbar-brand navbar-brand-custom" to="/home">
            ENFIX
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-1">
            <Link className="nav-link navbar-nav-custom text-white" to="/home">
              Home
            </Link>
            <Link className="nav-link navbar-nav-custom text-white" to="/">
              About
            </Link>
            <Link
              className="nav-link navbar-nav-custom text-white"
              to="/"
            >
              Services
            </Link>
            <Link
              className="nav-link navbar-nav-custom text-white"
              to="/dashboard"
            >
              Dashboard
            </Link>
            <Link
              className="nav-link navbar-nav-custom text-white"
              to="/"
            >
              Reviews
            </Link>
            <Link
              className="nav-link navbar-nav-custom text-white"
              to="/"
            >
              Contact
            </Link>
            <Link to="/login">
              <button
                onClick={loggedInUser.isSignedIn ? handleSignOut : undefined}
                type="button"
                className="btn navbar-nav-custom text-white"
              >
                {loggedInUser.isSignedIn ? "Logout" : "Login"}
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavbarHeader;
