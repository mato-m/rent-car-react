import React, { useEffect, useRef, useState } from "react";
import styles from "./Cars.module.css";
import Modal from "react-modal";
import { FaCheck } from "react-icons/fa";
Modal.setAppElement("#root");

const Cars = () => {
  const [more, setMore] = useState(false);
  const [selectedCar, setSelectedCar] = React.useState(null);

  const closeModal = () => {
    setSelectedCar(null);
  };
  useEffect(() => {
    document.body.style.overflow = selectedCar ? "hidden" : "auto";
  }, [selectedCar]);
  const carArray = [
    {
      id: 1,
      model: "Audi A7",
      price: 60,
      image: "a7.jpg",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: {
        "1 day": 90,
        "2 days": 85,
        "3-7 days": 70,
        "8+ days": 60,
      },
    },
    {
      id: 2,
      model: "Volkswagen Passat",
      price: 80,
      image: "passat.JPG",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: { "1 day": 90, "2 days": 85, "3-7 days": 70, "8+ days": 60 },
    },
    {
      id: 3,
      model: "Range Rover Sport",
      price: 250,
      image: "rr.jpg",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: { "1 day": 90, "2 days": 85, "3-7 days": 70, "8+ days": 60 },
    },
    {
      id: 4,
      model: "Mercedes G63",
      price: 360,
      image: "g63.jpg",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: { "1 day": 90, "2 days": 85, "3-7 days": 70, "8+ days": 60 },
    },
    {
      id: 5,
      model: "Volkswagen Golf 8",
      price: 120,
      image: "golf8.jpg",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: { "1 day": 90, "2 days": 85, "3-7 days": 70, "8+ days": 60 },
    },
    {
      id: 6,
      model: "Lamborghini Gallardo",
      price: 620,
      image: "gallardo.jpg",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: { "1 day": 90, "2 days": 85, "3-7 days": 70, "8+ days": 60 },
    },
    {
      id: 7,
      model: "Maserati Gran Turismo",
      price: 440,
      image: "gt.jpg",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: { "1 day": 90, "2 days": 85, "3-7 days": 70, "8+ days": 60 },
    },
    {
      id: 8,
      model: "Skoda Octavia",
      price: 40,
      image: "octavia.jpg",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: { "1 day": 90, "2 days": 85, "3-7 days": 70, "8+ days": 60 },
    },
    {
      id: 9,
      model: "Peugeot 308",
      price: 60,
      image: "308.jpg",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: { "1 day": 90, "2 days": 85, "3-7 days": 70, "8+ days": 60 },
    },
    {
      id: 10,
      model: "Mercedes Sprinter",
      price: 220,
      image: "sprinter.jpg",
      specs: ["2 people", "AC", "Automatic", "Diesel"],
      prices: { "1 day": 90, "2 days": 85, "3-7 days": 70, "8+ days": 60 },
    },
  ];

  return (
    <div className={styles.carsMain} id="cars">
      <h2>Our cars</h2>
      <div className={styles.carFlexWrapper}>
        {carArray.slice(0, more ? carArray.length : 4).map((v) => (
          <div className={styles.carItem} key={v.id}>
            <div>
              <span className={styles.priceOverlay}>From {v.price} €</span>
              <div className={styles.carOverlay}>
                <span>{v.model}</span>
                <span>From {v.price} €</span>
                <button
                  onClick={() => {
                    setSelectedCar(v);
                    disableBodyScroll(document.querySelector("body"));
                  }}
                >
                  Get prices
                </button>
              </div>
              <img src={"./" + v.image} />
            </div>
            <span className={styles.carModel}>{v.model}</span>
            <br />
          </div>
        ))}
      </div>
      <button
        style={{
          position: more ? "sticky" : "static",
          bottom: 50,
          background: more ? "#12121266" : "transparent",
          backdropFilter: "blur(8px)",
        }}
        className={styles.seeMoreButton}
        onClick={() => {
          setMore(!more);
        }}
      >
        See{more ? " less" : " more"}
      </button>
      <Modal isOpen={selectedCar !== null} onRequestClose={closeModal}>
        {selectedCar && (
          <>
            <h1>{selectedCar.model}</h1>
            {selectedCar.specs &&
              selectedCar.specs.map((v) => (
                <span key={v} style={{ display: "inline-block" }}>
                  <FaCheck
                    style={{ verticalAlign: "middle", marginRight: 10 }}
                  />
                  {v}
                </span>
              ))}
            <table>
              <thead>
                <tr>
                  <th>Duration</th>
                  <th>Price (€)</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selectedCar.prices).map(([duration, price]) => (
                  <tr key={duration}>
                    <td>{duration}</td>
                    <td>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className={styles.modalButton} onClick={closeModal}>
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Cars;
