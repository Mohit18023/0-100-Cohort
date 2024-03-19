import { VideoCard } from "./VideoCard";

const VIDEOS = [
  {
    title: "How to learn Coding in 30 days",
    channel: "Codecademy",
    views: "1.5M views",
    timestamp: "1 year ago",
    image: "you-tube-thumbnail-1.png",
    channelImage: "channel-photo.jpg",
  },
  {
    title: "How to learn Playing in 30 days",
    channel: "Codecademy",
    views: "1.5M views",
    timestamp: "1 year ago",
    image: "you-tube-thumbnail-1.png",
    channelImage: "channel-photo.jpg",
  },
  {
    title: "How to learn Jumping in 30 days",
    channel: "Codecademy",
    views: "1.5M views",
    timestamp: "1 year ago",
    image: "you-tube-thumbnail-1.png",
    channelImage: "channel-photo.jpg",
  },
  {
    title: "How to learn Walking in 30 days",
    channel: "Codecademy",
    views: "1.5M views",
    timestamp: "1 year ago",
    image: "you-tube-thumbnail-1.png",
    channelImage: "channel-photo.jpg",
  },
  {
    title: "How to learn Graphics in 30 days",
    channel: "Codecademy",
    views: "1.5M views",
    timestamp: "1 year ago",
    image: "you-tube-thumbnail-1.png",
    channelImage: "channel-photo.jpg",
  },
  {
    title: "How to learn Working in 30 days",
    channel: "Codecademy",
    views: "1.5M views",
    timestamp: "1 year ago",
    image: "you-tube-thumbnail-1.png",
    channelImage: "channel-photo.jpg",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((videos, index) => (
        <div>
          <VideoCard
            title={videos.title}
            channel={videos.channel}
            views={videos.views}
            timestamp={videos.timestamp}
            image={videos.image}
            channelImage={videos.channelImage}
            key={index}
          />
        </div>
      ))}
    </div>
  );
};
