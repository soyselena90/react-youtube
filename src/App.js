import React, { useState, useEffect } from "react";
import "./assets/css/reset.css";
import VideoList from "./components/video_list/video_list";

function App() {
   //videos의 목록을 가질 수 있는 state 만들기
   const [videos, setVideos] = useState([]);

   // 업데이트(마운트)가 되었을 때 유투브로부터 데이터 받아오기 - 한 번
   useEffect(() => {
      const requestOptions = {
         method: "GET",
         redirect: "follow",
      };

      fetch(
         "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBhSORu387fEy2EbuT2suGXhEwuSCRY6Ig",
         requestOptions
      )
         .then((response) => response.json()) //json으로 변환
         //변환된 파일중에 items 부분을 비동기적으로 videos에 update
         .then((result) => setVideos(result.items))
         .catch((error) => console.log("error", error));
   }, []);
   return (
      <div className="App">
         <VideoList videos={videos} />
      </div>
   );
}

export default App;
