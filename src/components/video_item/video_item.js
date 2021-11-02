import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
   return (
      <li className={styles.container}>
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
};

export default VideoItem;
