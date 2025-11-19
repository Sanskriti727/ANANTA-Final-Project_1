import React, { useState } from "react";
import Navbar from "./Navbar";
import Services from "./Services";
import Shop from "./Shop";
import Legacy from "./Legacy";
import AIAssistant from "./AIAssistant";
import Checkout from "./Checkout";
import CareTeam from "./CareTeam";
import Footer from "./Footer";
import Home from "./Home";
import CustomBuilder from "./CustomBuilder";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showCart, setShowCart] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Biodegradable Earth Urn",
      price: 2500,
      img: "https://images.unsplash.com/photo-1616606103915-dea7be788566?auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      name: "Brass Diya Set (Pack of 5)",
      price: 1200,
      img: "https://images.unsplash.com/photo-1605554769290-39e7f88a685c?auto=format&fit=crop&w=100&q=80",
    },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const addToCart = (newItems) => {
    const itemsToAdd = Array.isArray(newItems) ? newItems : [newItems];

    const formattedItems = itemsToAdd.map((item) => ({
      ...item,
      cartId: Date.now() + Math.random(), // Unique ID for removal
    }));

    setCartItems((prevItems) => [...prevItems, ...formattedItems]);
  };

  return (
    <div className="min-h-screen bg-[#F2E9D8] flex flex-col font-sans">
      <Navbar
        setPage={setCurrentPage}
        onCartClick={() => setShowCart(true)}
        onHelpClick={() => setShowHelp(true)}
        cartCount={cartItems.length}
      />

      {showCart && (
        <Checkout
          onClose={() => setShowCart(false)}
          items={cartItems}
          onRemove={removeFromCart}
        />
      )}
      {showHelp && <CareTeam onClose={() => setShowHelp(false)} />}

      <div className="flex-grow">
        {currentPage === "home" && (
          <Home setPage={setCurrentPage} onOpenHelp={() => setShowHelp(true)} />
        )}
        {currentPage === "services" && <Services setPage={setCurrentPage} />}
        {currentPage === "shop" && <Shop />}
        {currentPage === "legacy" && <Legacy />}
        {currentPage === "ai" && (
          <AIAssistant onOpenHelp={() => setShowHelp(true)} />
        )}

        {currentPage === "customize" && (
          <CustomBuilder
            setPage={setCurrentPage}
            addToCart={addToCart}
            setShowCart={setShowCart}
          />
        )}
      </div>

      <Footer setPage={setCurrentPage} />
    </div>
  );
}
