import { Fragment } from "react";
import { Route } from "react-router-dom";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
