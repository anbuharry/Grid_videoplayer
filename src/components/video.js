import React from "react";
// import imgsrc from "../media/img/1.png"

const VideoPlayer = ({ video, setPlaying }) => {
    // console.log("Source ==== ", video.imageSource, imgsrc)
    const img = require(`../media/img/${video.id}.png`)

    return (
        <div>
            <div className="singleBlog">
                <img src={img} alt="Error-404!!" />
                <div className="blogContent">
                    <a href  onClick={() => setPlaying(video)} >
                        {video.description}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
