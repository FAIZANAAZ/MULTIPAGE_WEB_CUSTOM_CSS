"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "../../../constant/card";
import './detail.css';

interface ProductDetailsProps {
  cardid: number;
}

const Productdetails: React.FC<ProductDetailsProps> = ({ cardid }) => {
  const cardData = data.find((item) => item.id == cardid);

  return (
    <>
      <section className="product-details-section">
        <div key={cardData?.id} className="product-container">
          <div className="product-content">
            {/* Image Section */}
            <div className="product-image-container">
              {cardData?.picture && (
                <Image
                  alt="Product details"
                  width={600}
                  height={600}
                  src={cardData?.picture}
                  className="product-image"
                />
              )}
            </div>

            {/* Product Details Section */}
            <div className="product-info">
              <nav className="product-nav">
                <Link href="../frontpage" className="home-link">
                  Home
                </Link>
              </nav>

              <h1 className="product-title">{cardData?.name}</h1>

              <p className="product-price">{cardData?.price}</p>

              <div className="delivery-days">
                <label className="delivery-label">
                  Delivery Days
                </label>
                <select className="delivery-select">
                  <option>Choose an option</option>
                  {/* Options can be dynamically rendered if needed */}
                </select>
              </div>

              <div className="quantity-control">
                <button className="quantity-button">-</button>
                <input
                  className="quantity-input"
                  type="text"
                  defaultValue="1"
                  aria-label="Quantity"
                />
                <button className="quantity-button">+</button>
              </div>

              <div className="action-buttons">
                <button className="add-to-cart-button">
                  Add to cart
                </button>
              </div>

              <p className="seller-info">Sold By: Gifterzz</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productdetails;