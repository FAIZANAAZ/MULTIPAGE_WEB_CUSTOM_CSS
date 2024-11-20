"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ImMenu } from "react-icons/im";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import './nav.css';

export default function Nav() {
  const [menu, setMenu] = useState(false);

  const openmenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <nav className="nav-container">
        <div className="logo-container">
          <Image
            src="/giftlog-removebg-preview.png"
            width={200}
            height={200}
            alt="Gift logo"
            className="logo-image"
          />
        </div>
        <div className="desktop-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/Aboutus" className="nav-link">About</Link>
          <Link href="/Ourgift" className="nav-link">Our gifts</Link>
          <Link href="/Ourshop" className="nav-link">Shop</Link>
          <Link href="/Contact" className="nav-link">Contact Us</Link>
          <Link href="/Product" className="nav-link">Products</Link>
        </div>

        <div className="mobile-menu-button">
          <button onClick={openmenu}>
            <ImMenu size={30} color="#000" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            className="mobile-menu"
            key="menuu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "260px", opacity: 0.8 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="mobile-nav-link">Home</Link>
            <Link href="/Aboutus" className="mobile-nav-link">About</Link>
            <Link href="/Ourgift" className="mobile-nav-link">Our gifts</Link>
            <Link href="/Ourshop" className="mobile-nav-link">Shop</Link>
            <Link href="/Contact" className="mobile-nav-link">Contact Us</Link>
            <Link href="/Product" className="mobile-nav-link">Products</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}