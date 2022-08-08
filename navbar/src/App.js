import React, {useEffect} from 'react';
import scrollreveal from 'scrollreveal';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './pages/Navbar';
import { Home } from "./pages/Home";
import { Locations } from "./pages/Locations";
import { Contact } from "./pages/Contact";

function App() {
  useEffect(() => {
  const sr = scrollreveal({
    origin: "top",
    distance: "80px",
    duration: 1600,
    reset: true,
  });
  sr.reveal(
    `
      nav
      `,
    {
      opacity: 0,
      interval: 300,
    }
  );
}, []);

  return (
    <>
    <Router>
      <Navbar />

      <div className="pages">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/locations" component={Locations} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
