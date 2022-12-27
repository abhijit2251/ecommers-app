import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
