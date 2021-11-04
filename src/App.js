import React, { useState, useEffect, useCallback } from "react";
import "./assets/css/reset.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
   //videos의 목록을 가질 수 있는 state 만들기
   const [videos, setVideos] = useState([]);
   //selected video state 생성
   const [selectedVideo, setSelectedVideo] = useState(null);
   const selectVideo = (video) => {
      setSelectedVideo(video);
   };
   const search = useCallback(
      (query) => {
         youtube
            .search(query) //
            .then((videos) => {
               setVideos(videos);
               setSelectedVideo(null);
            });
      },
      [youtube]
   );

   useEffect(() => {
      youtube
         .mostPopular() //
         .then((videos) => setVideos(videos));
   }, [youtube]);

   return (
      <div className="App">
         <SearchHeader onSearch={search} />
         <section className="content">
            {selectedVideo && (
               <div className="detail">
                  <VideoDetail video={selectedVideo} />
               </div>
            )}

            <div className="list">
               <VideoList
                  videos={videos}
                  onVideoClick={selectVideo}
                  display={selectedVideo ? "list" : "grid"}
               />
            </div>
         </section>
      </div>
   );
}

export default App;
