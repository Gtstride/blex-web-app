import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { Button } from "react-bootstrap";
import Swal from "sweetalert2";


const LogoutPage = () => {
  const [loggedOut, setLoggedOut] = useState(false);
  const [user, setUser] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    try {
      localStorage.clear();
      localStorage.removeItem(user);
      setUser(false);
      setLoggedOut(true);
      Swal.fire({
        title: "Successful 😀",
        text: `${"You have logged out successfully."}`,
      });
    } catch (error) {
      localStorage.clear();
      // window.reload();
      Swal.fire({
        title: "Whoop 😀, sorry, something went wrong!",
        text: error.message,
      });
    }

  };

  if (loggedOut) {
    return <Redirect to={
      {
        pathname: '/admin',
        state: {
          from: window.location.href
        }
      }
    } />
  }


  return (
    <div>
      <input
        type="button"
        className="success"
        value="Log Out"
        user={user}
        onClick={logout}
        style={{ border: "none", }}
      />
    </div>
  );
};

export default LogoutPage;
