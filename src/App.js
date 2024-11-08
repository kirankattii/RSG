import React, { Suspense, lazy, useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";

import Loader  from "./components/loader";

// Lazy load components
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  useEffect(() => {
    AOS.init({});
  });
  return (
  
      <Suspense fallback={<><Loader /></>}> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
  );
}

export default App;
