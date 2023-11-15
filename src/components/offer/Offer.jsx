import React from "react";
import styles from "./Offer.module.css";
import { FaCar, FaCreditCard, FaHandshake } from "react-icons/fa";
const Offer = () => {
  return (
    <div className={styles.offerMain}>
      <div>
        <div className={styles.imageOverlay}>What we offer</div>
        <img src="./offer.jpg" />
      </div>
      <div>
        <div>
          <FaCar size={48} /> <br />
          High quality cars
        </div>
        <div>
          <FaCreditCard size={48} /> <br />
          Best prices
        </div>
        <div>
          <FaHandshake size={48} /> <br />
          Reliability
        </div>
      </div>
    </div>
  );
};

export default Offer;
