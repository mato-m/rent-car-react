import React from "react";
import styles from "./Contact.module.css";
import { FaInstagram, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
const Contact = () => {
  return (
    <div className={styles.contactMain}>
      <h2>Contact us</h2>
      <h3>Feel free to reach out to us</h3>
      <div className={styles.contactWrapper}>
        <div className={styles.contactData}>
          <a href="mailto:example@example.com">
            <FaRegEnvelope
              style={{ marginRight: 10, verticalAlign: "middle" }}
            />
            example@example.com
          </a>
          <a href="tel:+123456789">
            <FaMobileAlt style={{ marginRight: 10, verticalAlign: "middle" }} />
            +123 456 789
          </a>
          <a href="https://instagram.com/rentmne">
            <FaInstagram style={{ marginRight: 10, verticalAlign: "middle" }} />
            rentMNE
          </a>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9934.722249271881!2d-0.1246254!3d51.5007292!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c38c8cd1d9%3A0xb78f2474b9a45aa9!2sBig%20Ben!5e0!3m2!1sen!2s!4v1698875259216!5m2!1sen!2s"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
