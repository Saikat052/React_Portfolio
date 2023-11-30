import logo from "./logo.svg";
import "./App.css";
import React from "react";
import NavBar from ".components/NavBar";
import Body from ".components/Body";
import Footer from ".components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Body/>
        <Footer/>
      </div>
  );
}

export default App;
