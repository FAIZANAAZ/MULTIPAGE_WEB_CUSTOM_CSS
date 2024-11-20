"use client";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css"; // Import custom CSS

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-info">
          <h1 className="contact-heading">Contact Us</h1>
          <a className="contact-phone">
            Phone <BsTelephoneFill size={20} /> : +92 123 456 789
          </a>
          <a className="contact-email">
            Email <MdOutlineEmail size={20} /> : giftnaaz@gmail.com
          </a>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57933.370639381625!2d67.09169307748044!3d24.83529294935495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b07c73d0a7f:0xecc47fa378e95fd5!2sKorangi, Karachi, Karachi City, Sindh, Pakistan!5e0!3m2!1sen!2s!4v1730920411972!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
