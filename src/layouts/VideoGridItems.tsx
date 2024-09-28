import React from "react";
import { formatDuration } from "../utils/formatDuration";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VideoGridItems = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className="block w-full h-full object-cover rounded-xl"
          alt={title}
        />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <img src={channel.profileUrl} className="w-12- h-12 rounded-full" />
        </a>
        <div>
          <a href={`/watch?v=${id}`} className="font-bold"></a>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItems;
