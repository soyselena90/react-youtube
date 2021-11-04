class Youtube {
   // constructor(key) {
   //    this.client = axios.create({
   //       baseURL: "https://www.googleapis.com/youtube/v3",
   //       params: { key: key },
   //    });
   // } // 어떤 것을 이용해서 통신하는지 숨기고 싶다면, key전달하지 않고 ...
   constructor(httpClient) {
      this.client = httpClient;
   }

   async mostPopular() {
      const response = await this.client.get("videos", {
         params: {
            part: "snippet",
            chart: "mostPopular",
            maxResults: 25,
         },
      });
      return response.data.items;
   }

   async search(query) {
      const response = await this.client.get("search", {
         params: {
            part: "snippet",
            maxResults: 25,
            q: query,
            type: "video",
         },
      });
      return response.data.items.map((item) => ({
         ...item,
         id: item.id.videoid,
      }));
   }
}

export default Youtube;
