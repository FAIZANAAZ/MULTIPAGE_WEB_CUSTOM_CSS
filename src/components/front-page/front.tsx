import Image from "next/image";
import "./front.css"; // Import the CSS file

const Front = () => {
    return (
        <>
        {/* sec1 */}
        <div className="front-container">
            <div className="front-text-container">
                <h2 className="front-heading-small">Our Best</h2>
                <h1 className="front-heading-large">Gifts Shop</h1>
                <p className="front-paragraph">
                    Discover the perfect gift for every occasion at our shop. From birthdays to anniversaries, we have a wide range of unique and thoughtful gifts that will make your loved ones feel special and cherished.
                </p>
            </div>
            <div className="front-image-container">
                <Image
                    src={"/gift.png"}
                    width={500}
                    height={500}
                    alt="A beautifully wrapped gift box with a purple ribbon"
                    className="front-image"
                />
            </div>
        </div>
        </>
    );
};

export default Front;
