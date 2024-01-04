import React, { useEffect, useState } from "react";
import { Carousel } from "@material-tailwind/react";
import "./CarouselWithContent.css";
import { Link } from "react-router-dom";

export function CarouselWithContent() {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  useEffect(() => {
    const importImages = async () => {
      try {
        const imageContext = import.meta.glob("../../assets/carouselImg/*.jpg"); // Adjust for your image format
        const images = await Promise.all(Object.values(imageContext).map(async (image) => (await image()).default));
        setCarouselImages(images);
      } catch (error) {
        console.error("Error importing carousel images:", error);
      }
    };

    importImages();
  }, []);

  useEffect(() => {
    const hideWelcomeText = setTimeout(() => setShowWelcomeText(false), 2000); // Adjust timeout as needed
    return () => clearTimeout(hideWelcomeText);
  }, []);

  const handleCarouselClick = () => {
    setShowWelcomeText(false); // Optionally hide welcome text on carousel click
  };

  return (
    <div className="carousel-container relative h-96 overflow-hidden rounded-lg">
      <Carousel
        items={carouselImages} // Use updated carouselImages state
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        loop
      >
        {/* Wrap multiple images within Carousel.children with dynamic opacity and transition styles */}
        {carouselImages.map((image, index) => (
          <img
            src={image}
            alt={`image ${index + 1}`}
            key={index}
            className={`carousel-item-slide ${index === currentIndex ? "active" : ""}`}
            style={{ opacity: index === currentIndex ? 1 : 0.2 }} // Set opacity based on index and currentIndex
            transition="opacity 500ms ease-in-out" // Define transition for opacity
            onClick={handleCarouselClick} // Optionally handle click on each image
          />
        ))}
      </Carousel>

      {/* Overlay content with conditional rendering */}
      {showWelcomeText ? (
        <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <p className="text-4xl font-bold mb-4 text-white mix-blend-hard-light">
            Welcome to Sanho Heavy Equipment & Road Construction!
          </p>
          <p className="text-4xl font-bold mb-4 text-white mix-blend-hard-light">
            Delivering Excellence
          </p>
        </div>
      ) : (
        <div className="overlay absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <p className="text-4xl font-bold mb-4 text-white mix-blend-hard-light">Sanho Heavy Equipment & Road Construction</p>
          <p className="text-2xl mb-8 text-white mix-blend-hard-light bg-blend-overlay">New/After-market parts for sale</p>
          <p className="text-2xl mb-8 text-white mix-blend-hard-light bg-blend-overlay"><span>Delivering Excellence</span> </p>
          <div className="flex gap-8 ">
            <button className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full transition duration-300 mr-4">
              <Link to="/about">Learn More</Link>
            </button>
            <button className="bg-orange-950 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              <Link to="/parts">Shop Now</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
