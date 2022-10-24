import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import classes from "./App.module.css"
import React from "react";
import About from "../../pages/about/About";
import Home from "../../pages/home/Home";
import WhereToRide from "../../pages/WhereToRide";
import Contacts from "../../pages/contacts/Contacts";
import Error from "../../pages/error/Error";
import Header from "../header/Header";
import User from "../../pages/user/User";
import Feedback from "../../pages/feedback/Feedback";
import Delivery from "../../pages/delivery/Delivery";
import Footer from "../footer/Footer";
import Rewiews from "../../pages/rewiews/Reviews";
import Rules from "../../pages/rules/Rules";
import Policy from "../../pages/policy/Policy";
import Main from "../main/main";



function App() {
  return (
      <div className={classes.wrapper}>
        <Router>
          <Header />
          <Main>
            <Routes>
              <Route path="/about" element={<About />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/wheretoride" element={<WhereToRide />}></Route>
              <Route path="/contacts" element={<Contacts />}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/feedback" element={<Feedback />}></Route>
              <Route path="/delivery" element={<Delivery />}></Route>
              <Route path="/reviews" element={<Rewiews />}></Route>
              <Route path="/rules" element={<Rules />}></Route>
              <Route path="/policy" element={<Policy />}></Route>
              <Route path="*" element={<Error />}></Route>
            </Routes>
          </Main>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
