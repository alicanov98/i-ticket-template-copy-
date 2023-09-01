import React from "react";

// Router
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AllEvnets from "./pages/AllEvnets";
import CardDetails from "./pages/CardDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-events" element={<AllEvnets/>}/>
        <Route path="/CardDetails/:id" element={<CardDetails/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
