import React, { Component } from 'react'
import AdminLogOut from "../../components/auth/admin/AdminLogOut"

export default class DashBoard extends Component {


  handleLogOut = async function handleLogout() {
    // await Auth.signOut();

    // userHasAuthenticated(false);

    // history.push("/admin");
    console.log("Logout aDMIN")
  }
  render() {
    return (
      <div className="mt-30">
        <p> <h1>Welcome To the admin DashBoard,
          What can i do for you</h1>
          <h1>Welcome To the admin DashBoard, consectetuer
            What can i do for you</h1>
          <h1>Welcome To the admin DashBoard, consectetuer
            What can i do for you</h1>
          <h1>Welcome To the admin DashBoard, consectetuer
            What can i do for you</h1>
          <h1>Welcome To the admin DashBoard, consectetuer
            What can i do for you</h1></p>

        <button value="submit" ><AdminLogOut /></button>
      </div>
    )
  }
}
