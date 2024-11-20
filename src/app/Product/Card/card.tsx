"use client";
import Image from "next/image";
import { data } from "../../../../constant/card";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./styles.css";



interface GiftItem {
  id: number;
  name: string; // Name is a string
  price: string;
  picture: string; // Picture URL is a string
}

const getDataInRange = (data: GiftItem[], start: number, end: number): GiftItem[] => {
  return data.slice(start, end); // Return the sliced data
};

// Define types for props
interface CardSectionProps {
  items: GiftItem[]; // Array of items, adjust type as per actual data structure
  heading: string; // Heading is a string
}

const CardSection: React.FC<CardSectionProps> = ({ items, heading }) => (
  <section className="cardSection">
    <h1 className="card-heading">{heading}</h1>
    <div className="card-container">
      {items.map((item) => (
        <Link href={`/Product/${item.id}`} key={item.id}>
          <div data-aos="zoom-in" className="card">
            <div className="image-container">
              <Image
                src={item.picture}
                width={1000}
                height={1000}
                alt="gifts"
                className="image"
              />
            </div>
            <div className="card-details">
              <h1 className="card-title">{item.name}</h1>
              <h1 className="card-price">{item.price}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

const Card = () => {
  // useEffect to ensure AOS runs only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        offset: 200, // Jab 200px scroll ho, tab animation trigger ho
        duration: 800, // Animation ka duration
        easing: "ease-in-out", // Animation ka easing effect
        once: true,
        delay: 100, // Animation sirf ek baar chale
      });
    }
  }, []); // Empty dependency array ensures it runs only once when component mounts

  return (
    <>
      {/* Render different sections with specific index ranges and custom headings */}
      <CardSection items={getDataInRange(data, 0, 10)} heading="CORPORATE GIFTS" />
      <CardSection items={getDataInRange(data, 10, 20)} heading="GIFT COMBINATION" />
      <CardSection items={getDataInRange(data, 20, 30)} heading="GIFT BASKET" />
      <CardSection items={getDataInRange(data, 30, 40)} heading="PERSONALIZED GIFTS" />
      <CardSection items={getDataInRange(data, 40, 50)} heading="GIFT CAKE" />
    </>
  );
};

export default Card;
