export const changeVideoFormat = (video) => ({
  id: video?.id?.videoId,
  title: video?.snippet?.title,
  imgUrl: video?.snippet?.thumbnails?.high.url,
  link: `/watch/${video?.id?.videoId}`,
});
