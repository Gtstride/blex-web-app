import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header/Header"
import ContactUs from "./pages/contact-us/ContactUs"
import Home from "./pages/Home/Home"

// import Work from "./pages/Work/Work"
import PopularCourse from "./views/popular-course/PopularCourse"

const Routes = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={PopularCourse} />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>

    </>
  )
}

export default Routes;