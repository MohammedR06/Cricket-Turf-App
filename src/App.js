import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Aboutus from "./Routes/Aboutus";
import Gallery from "./Routes/Gallery";
import BookingForm from "./Components/BookingForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
