import React from "react";
import Info from "./Components/Info";
import About from "./Components/About";
import Interests from "./Components/Interests";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="card">
      <Info title="Oloyede Adeosun" />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
