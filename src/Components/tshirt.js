import React from 'react';
import { Fade,Slide,Bounce } from 'react-reveal';

const VideoPlayer = () => {
  return (
    <div id="portfolio" style={{backgroundColor:'white'  ,display: 'flex',
   justifyContent:'center',alignItems:'center',
  }}>
  {/* <Fade duration={1000}> */}
      <video style={{alignSelf:'center'}} width="560" height="315" autoPlay loop muted>
        <source src={'images/zerowastet.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* </Fade> */}
    </div>
  );
};

export default VideoPlayer;