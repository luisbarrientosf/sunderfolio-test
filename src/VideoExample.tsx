import React from "react";
import "./VideoExample.css";

const VideoExample: React.FC = () => {
  return (
    <div className="video-example">
      <h2>Video Example</h2>
      <video width="480" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoExample;
