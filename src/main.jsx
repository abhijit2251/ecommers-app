import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ProductsProvider from "./contexts/ProductsContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </React.StrictMode>
);
