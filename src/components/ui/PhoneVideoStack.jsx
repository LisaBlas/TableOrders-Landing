import { useEffect, useRef } from 'react';

export default function PhoneVideoStack({ videos, activeIndex, className = '' }) {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  return (
    <div className={`phone-video ${className}`.trim()}>
      <div className="phone-video__shell">
        <div className="phone-video__speaker" />
        <div className="phone-video__screen">
          {videos.map((video, index) => (
            <video
              key={video.src}
              ref={(el) => { videoRefs.current[index] = el; }}
              className={`phone-video__clip ${index === activeIndex ? 'is-active' : ''}`}
              src={video.src}
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden={index !== activeIndex}
            />
          ))}
        </div>
        <div className="phone-video__home" />
      </div>
    </div>
  );
}
