import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './gift.css'

const Sec3 = () => {
  return (
    <div>
      <section className="sec3-section">
        <div className="sec3-header">
          <h1 className="sec3-title">Our gifts</h1>
          <p className="sec3-description">
            Discover gifts that make memories—unique, thoughtful, and crafted to impress for any occasion!
          </p>
        </div>

        <div className="sec3-cards-container">
          {/* Card 1 */}
          <div className="sec3-card">
            <Image
              src="/sec3 (1).jpg"
              alt="A small cactus in a turquoise pot"
              width={400}
              height={400}
              className="sec3-image sec3-card2"
            />
            <div className="sec3-card-text">
              <Link href="/Product">
                <h2 className="sec3-card-title">View more</h2>
              </Link>
              <p className="sec3-card-description">
                These are the best gift collections, with all varieties
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sec3-card ">
            <Image
              src="/sec3-2 (2).jpg"
              alt="A small cactus in a turquoise pot"
              width={400}
              height={400}
              className="sec3-image sec3-card2"
            />
            <div className="sec3-card-text">
              <Link href="/Product">
                <h2 className="sec3-card-title">View more</h2>
              </Link>
              <p className="sec3-card-description">
                These are the best gift collections, with all varieties
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sec3