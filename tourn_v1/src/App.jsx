import React, { useState } from "react";
import NavBar from "./components/navbar/navbar.component";
import Home from "./pages/Home/Home.page";
import Footer from "./components/footer/footer.component";
import { Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
