// HeroSection.tsx
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./styles/HeroSection.css";

interface HeroSectionProps {
  name: string;
  jobTitle: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  jobTitle,
  imageUrl,
}) => {
  const [isConfettiActive, setConfettiActive] = useState(false);
  const [confettiOpacity, setConfettiOpacity] = useState(1);

  const shootConfetti = () => {
    setConfettiActive(true);
  };

  useEffect(() => {
    let fadeOutInterval: NodeJS.Timeout;

    if (isConfettiActive) {
      fadeOutInterval = setInterval(() => {
        setConfettiOpacity((prevOpacity) => {
          const newOpacity = prevOpacity - 0.1;

          if (newOpacity <= 0) {
            clearInterval(fadeOutInterval);
            setConfettiActive(false);
          }

          return newOpacity;
        });
      }, 5000);
    }

    return () => clearInterval(fadeOutInterval);
  }, [isConfettiActive]);

  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-heading">
            <b>{name}</b>
          </h1>
          <h1 className="lead job">{jobTitle}</h1>
          <button className="btn btn-primary btn-lg" onClick={shootConfetti}>
            Shoot Confetti
          </button>
        </div>
        <div className="hero-image">
          <img src={imageUrl} alt={name} className="img-fluid rounded-circle" />
        </div>
      </div>
      {/* Confetti component */}
      {isConfettiActive && (
        <div className="confetti-container">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            opacity={confettiOpacity}
            numberOfPieces={200}
            colors={[
              "#FF0000", // Red
              "#00FF00", // Green
              "#0000FF", // Blue
              "#FFFF00", // Yellow
              "#800080", // Purple
              "#00FFFF", // Cyan
              "#FFA500", // Orange
              "#FFC0CB", // Pink
              "#A52A2A", // Brown
              "#808080", // Grey
            ]}
            gravity={0.2}
            wind={0.1}
            initialVelocityX={5}
            initialVelocityY={10}
            tweenDuration={5000}
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
