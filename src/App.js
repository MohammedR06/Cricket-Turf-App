import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Aboutus from "./Routes/Aboutus";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
