import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div style={{textAlign:"center"}}>
       <h1>Enter search keyword to load...</h1>
       <br></br>
       <p style={{fontSize:'25px'}}>
       Video reviews of your search keyword       

       </p>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div style={{textAlign:"center",  margin:"20px 20px 20px 20px"}}>
      <div  className="ui embed" >
        <iframe  style={{  width:'90%', height:'500px'}} src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4  className="ui header">{video.snippet.title}</h4>
        <p style={{ margin: "20px 40px 40px 40px " }}>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;