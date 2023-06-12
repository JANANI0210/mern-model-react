import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./routes/HomeComponent/HomeComponent";
import ToursComponent from "./routes/ToursComponent/ToursComponent";
import AboutComponent from "./routes/AboutComponent/AboutComponent";
import BookingComponent from "./routes/BookingComponent/BookingComponent";
import ContactUsComponent from "./routes/ContactUsComponent/ContactUsComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <h1> GET TO EXPLORE THE WORLD</h1>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/booking">Bookings</Link>
          </li>
          <li>
            <Link to="/tours">Tours</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<HomeComponent />}></Route>
          <Route exact path="/about" element={<AboutComponent />}></Route>
          <Route exact path="/booking" element={<BookingComponent />}></Route>
          <Route exact path="/tours" element={<ToursComponent />}></Route>
          <Route exact path="/contact" element={<ContactUsComponent />}></Route>
          <Route></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
