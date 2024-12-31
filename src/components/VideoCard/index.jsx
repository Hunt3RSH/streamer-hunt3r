const VideoCard = ({ imageUrl, views, lastStreamDate, title }) => (
  <div>
    <img src={imageUrl} alt="Video Thumbnail" />
    <div>
      <h4>{title}</h4>
      <p>Переглядів: {views}</p>
      <p>Останній стрім: {new Date(lastStreamDate).toLocaleDateString()}</p>
    </div>
  </div>
);
export default VideoCard;
