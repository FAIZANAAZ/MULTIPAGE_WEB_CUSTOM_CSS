import React from 'react'
import Image from 'next/image'
import './shop.css'; // Import the CSS file

const Sec4 = () => {
  return (
    <>
      <section className="sec4-section">
        <div className="sec4-container">
          {/* Image section */}
          <div className="sec4-image-container">
            <div className="sec4-image-border"></div>
            <Image
              alt="A woman in a flower shop surrounded by flowers"
              src="/sec4-1.jpg"
              width={400}
              height={400}
              className="sec4-image"
            />
          </div>

          {/* Content section */}
          <div className="sec4-content">
            <h1 className="sec4-title">Our Shop</h1>
            <p className="sec4-description">
              At our shop, quality and creativity are at the heart of everything we offer. Each gift is selected with love and crafted to bring smiles. Explore our range, and find the perfect piece that speaks to your loved ones hearts, or discover a treasure for yourself!
            </p>
            <p className="sec4-description">
              For years, our gift shop has been a trusted choice for customers looking for unique and meaningful gifts. With a strong reputation built on quality and reliability, we take pride in delivering a positive experience to each visitor. Our customers’ feedback has been overwhelmingly positive, and we ensure that every order is delivered on time, making each occasion extra special.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sec4;
