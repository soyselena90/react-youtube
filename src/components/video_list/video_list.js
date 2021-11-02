import React from "react";
import VideoItem from "../video_item/video_item";
import "../../App.css";

const VideoList = (props) => {
   return (
      <ul className="videoListWrap">
         {props.videos.map((video) => (
            //map 사용 시 고유의 값 key 넣어줄 것
            <VideoItem key={video.id} video={video} />
         ))}
      </ul>
   );
};

export default VideoList;
