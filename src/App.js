import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import UserData from "./UserData";
import Navbar from "./Navbar";
import EditUser from "./EditUser";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userData" element={<UserData />} />
          <Route path="/editUser/:id" element={<EditUser />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
