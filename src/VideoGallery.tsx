import React, { useState } from "react";
import "./VideoGallery.css";

const videos = [
  // Portrait sample videos (replace with your own if needed)
  "https://www.w3schools.com/html/mov_bbb.mp4", // Not portrait, but placeholder
  "https://www.w3schools.com/html/movie.mp4",   // Not portrait, but placeholder
  // Add more portrait video URLs here
];

const VideoGallery: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const handleNav = (dir: 'left' | 'right') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => {
        if (dir === 'left') return prev === 0 ? videos.length - 1 : prev - 1;
        return prev === videos.length - 1 ? 0 : prev + 1;
      });
      setAnimating(false);
    }, 350);
  };

  return (
    <div className="video-gallery">
      <button className="arrow left" onClick={() => handleNav('left')} disabled={animating}>
        &#8592;
      </button>
      <div className={`video-wrapper ${animating ? direction : ''}`}>
        <video
          key={current}
          className="gallery-video"
          controls
          style={{ aspectRatio: '9/16', width: 300, borderRadius: 12 }}
        >
          <source src={videos[current]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <button className="arrow right" onClick={() => handleNav('right')} disabled={animating}>
        &#8594;
      </button>
    </div>
  );
};

export default VideoGallery;
