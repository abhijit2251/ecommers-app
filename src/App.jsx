import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
