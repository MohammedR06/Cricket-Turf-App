import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
