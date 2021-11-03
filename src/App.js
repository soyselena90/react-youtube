import React, { useState, useEffect } from "react";
import "./assets/css/reset.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
   //videos의 목록을 가질 수 있는 state 만들기
   const [videos, setVideos] = useState([]);
   const search = (query) => {
      youtube
         .search(query) //
         .then((videos) => setVideos(videos));
   };

   useEffect(() => {
      youtube
         .mostPopular() //
         .then((videos) => setVideos(videos));
   }, []);

   return (
      <div className="App">
         <SearchHeader onSearch={search} />
         <VideoList videos={videos} />
      </div>
   );
}

export default App;
