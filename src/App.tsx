import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import AppRouter from './router';

const videos = [
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://www.w3schools.com/html/movie.mp4",
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
];

function CarouselPage() {
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handleNav('left');
      if (e.key === 'ArrowRight') handleNav('right');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animating]);

  return (
    <div className="carousel-fullpage-container">
      <div className="background-video-wrapper">
        <video
          className="background-video"
          src={videos[current]}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="background-overlay" />
      </div>
      <button className="arrow left" onClick={() => handleNav('left')} disabled={animating}>
        &#8592;
      </button>
      <div className="carousel-video-outer">
        <div className={`carousel-video-wrapper${animating ? ' ' + direction : ''}`}
          style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <video
            key={current}
            controls
            className="fullpage-video"
            style={{ transition: 'opacity 0.35s, transform 0.35s', opacity: animating ? 0.5 : 1, transform: animating ? (direction === 'left' ? 'translateX(-60px) scale(0.95)' : direction === 'right' ? 'translateX(60px) scale(0.95)' : 'none') : 'none' }}
          >
            <source src={videos[current]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <button className="arrow right" onClick={() => handleNav('right')} disabled={animating}>
        &#8594;
      </button>
    </div>
  )
}

function PinterestGallery() {
  return (
    <div style={{ minHeight: '100vh', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Pinterest Gallery Example</h1>
      <p>This is a placeholder for your Pinterest-style gallery.</p>
    </div>
  )
}

function App() {
  return <AppRouter />;
}

export default App;
