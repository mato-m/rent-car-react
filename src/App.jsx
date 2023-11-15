import { useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Cars from "./components/cars/Cars";
import Offer from "./components/offer/Offer";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Hero />
      <Cars />
      <Offer />
      <Contact />
      <footer
        style={{
          width: "100%",
          textAlign: "center",
          padding: "10px 0",
          background: "#e1790b",
          color: "#121212",
        }}
      >
        Designed by Mato Martinovic | {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
