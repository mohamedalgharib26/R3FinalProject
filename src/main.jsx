import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes } from "react-router";
import { Route } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import Cart from "./Pages/Cart.jsx";
import CartContext from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CartContext>
);
