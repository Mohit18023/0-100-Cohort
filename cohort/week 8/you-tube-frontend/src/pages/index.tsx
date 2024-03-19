import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "../components/VideoCard"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard 
      title={"How to learn Coding in 30 days"}
      channel={"Codecademy"}
      views={"1.5M views"}
      timestamp={"1 year ago"}
      image={"you-tube-thumbnail-1.png"}
      channelImage={"channel-photo.jpg"}
       />
    </div> 
  );
}
