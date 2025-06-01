import Masonry from 'react-masonry-css';
import '../App.css';
import './PinterestGallery.css';
import { useRef, useEffect } from 'react';

const galleryItems = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' },
  { type: 'video', src: 'https://www.w3schools.com/html/movie.mp4' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429' },
  { type: 'video', src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?2' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?3' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?3' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?3' },
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const PinterestGallery = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      videoRefs.current.forEach((video) => {
        if (!video) return;
        const rect = video.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Pinterest Gallery Example</h1>
      <p>This is a placeholder for your Pinterest-style gallery.</p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleryItems.map((item, idx) => (
          <div key={idx} className="pinterest-image-wrapper">
            {item.type === 'image' ? (
              <img src={item.src + '?w=400&auto=format'} alt="Pinterest Example" className="pinterest-image" />
            ) : (
              <video
                ref={el => { videoRefs.current[idx] = el || null; }}
                src={item.src}
                className="pinterest-image"
                style={{ aspectRatio: '9/16', width: '100%', borderRadius: 16, background: '#111' }}
                controls
                muted
                playsInline
              />
            )}
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default PinterestGallery;
