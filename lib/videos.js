import { changeVideoFormat } from "../utils";
import surfingData from "../db/surfingData";

const getVideos = async ({ query }) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  // const query = "productivity";
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=25&key=${YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  const videos = data.items.map((video) => changeVideoFormat(video));
  // {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   }
  // console.log({ videos: videos, query });
  return videos;
};

export default getVideos;
