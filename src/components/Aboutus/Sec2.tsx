import React from 'react'
import Image from 'next/image'
import './about.css'

const Sec2 = () => {
  return (
    <div>
      <div className="about-section">
        <div className="about-content">
          <h1 className="about-title">ABOUT US</h1>
          <p className="about-description">
            Welcome to <strong>Gift Sho</strong>, your top source for unique and high-quality gifts. Our passion for finding the perfect items for every occasion means we are committed to offering you the best in quality, design, and customer care. With each gift, we aim to bring a little more joy into your life. Thank you for choosing us to be part of your gifting experience!
          </p>
        </div>

        <div className="about-image-container">
          <div className="image-frame">
            <div className="image-wrapper swing-in-top-fwd">
              <Image
                src="/about.png"
                width={400}
                height={400}
                alt="A beautifully wrapped gift box with a purple ribbon"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec2