import React, { memo } from "react";
import styles from "./video_item.module.css";

//props가 바뀌지 않는 다면 다시 updata가 필요하지 않다면, memo를 활용
const VideoItem = memo(
   ({ video, video: { snippet }, onVideoClick, display }) => {
      const displayType = display === "list" ? styles.list : styles.grid;
      return (
         <li
            className={`${styles.container} ${displayType}`}
            onClick={() => onVideoClick(video)}
         >
            <div className={styles.videoItem}>
               <img
                  src={snippet.thumbnails.medium.url}
                  alt={snippet.description}
               />
               <div>
                  <p>{snippet.title}</p>
                  <p className={styles.channelTitle}>{snippet.channelTitle}</p>
               </div>
            </div>
         </li>
      );
   }
);

export default VideoItem;
