import React from "react";
import VideoItem from "../video_item/video_item";
import "../../App.css";

const VideoList = ({ videos, onVideoClick, display }) => {
   return (
      <ul className="videoListWrap">
         {videos.map((video) => (
            //map 사용 시 고유의 값 key 넣어줄 것
            <VideoItem
               key={video.id}
               video={video}
               onVideoClick={onVideoClick}
               display={display}
            />
         ))}
      </ul>
   );
};

export default VideoList;
