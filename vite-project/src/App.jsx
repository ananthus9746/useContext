// App.js
import  { useState } from "react";

// import things from react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextConnectWallet from './ContextConnectWallet'

// import pages
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Navbar from "./NavBar";
import ViewProject from "./ViewProject";

function App() {
  const [connectWallet, setConnectWallet] = useState(false)

  return (
    <BrowserRouter>
    <div style={{ padding: 30 }}>
    <ContextConnectWallet.Provider value={{ connectWallet, setConnectWallet }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/viewProject" element={<ViewProject />} />
      </Routes>
      </ContextConnectWallet.Provider>

    </div>
  </BrowserRouter>
  );
}

export default App;