import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import housingdata from "./datas/housingdata.json"

function HousingVerification() {
  const { id } = useParams();
  let page = housingdata.find(i => i.id === id)

  if (!page) {
    return <Error />;
  }
}

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apropos" element={<About />} />
        <Route path="/logement/:id" element={<HousingVerification />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;