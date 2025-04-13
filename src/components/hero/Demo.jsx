import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const Demo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const current = video.currentTime;
      const duration = video.duration;
      const percent = (current / duration) * 100;
      setProgress(percent);
    };

    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  return (
    <div className="relative mx-auto min-h-[80vh] w-full py-10 overflow-hidden">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[80vh] cursor-pointer overflow-hidden"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/ads.mp4"
        />

        {/* Overlay when hovered */}
        {( !isPlaying) && (
          <div className="absolute inset-0 bg-black/80 cursor-pointer bg-opacity-50 transition duration-500 z-10"></div>
        )}

        {/* Play/Pause Button */}
        {isHovered && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white text-primary p-3 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer transition duration-300"
          >
            {isPlaying ? (
              <FaPause className="w-5 h-5" />
            ) : (
              <FaPlay className="w-5 h-5" />
            )}
          </button>
        )}

        {/* Progress Bar */}
        <div
          dir="ltr"
          className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-300 z-30"
        >
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
