import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";
import ProductPage from "./assets/components/Product";

function App() {
  const [navIcon, setNavIcon] = useState(false);
  const handleNav = () => {
    setNavIcon(!navIcon);
  };
  return (
    <div
      className={`${navIcon ? "overflow-y-hidden" : ""} ${
        navIcon ? "h-screen" : ""
      }`}
    >
      <Navbar handleNav={handleNav} navIcon={navIcon} />
      <Routes>
        <Route path="/" element={<Home navIcon={navIcon} />}></Route>
        <Route path="products" element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
