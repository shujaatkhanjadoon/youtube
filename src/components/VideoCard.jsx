import React from 'react';
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from 'react-router-dom';
import { BsFillCheckCircleFill } from "react-icons/bs";
import VideoLength from '../shared/VideoLength';

const VideoCard = ({video}) => {
  return <Link to={`video/${video?.videoId}`}>
    <div className="flex flex-col mb-8">
      <div className="relative h-48 md:h-60 md:rounded-xl overflow-hidden">
        <img className = "h-full w-full object-cover" src={video?.thumbnails?.[0]?.url} alt=""/>
        {video?.lengthSeconds && (
          <VideoLength time={video?.lengthSeconds} />
        )}
      </div>
      <div className="flex text-white mt-3">
        <div className="flex items-start">
          <div className="flex h-9 w-9 overflow-hidden rounded-full">
            <img className='h-full w-full object-cover' src={video?.author.avatar[0]?.url} alt='channel icon' /> 
          </div>
        </div>
        <div className="flex flex-col overflow-hidden ml-3">
          <span className='text-sm font-normal line-clamp-2'>
            {video.title}
          </span>
          <span className='flex items-center text-[12px] font-semibold mt-[5] text-white/[0.7]' >
            {video?.author?.title}
            {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
              <BsFillCheckCircleFill className='text-[12px] text-white/[0.5] ml-1' />
            )}
          </span>
          <div className="flex overflow-hidden font-semibold text-white/[0.7] text-[12px] truncate" >
            <span> { `${abbreviateNumber(video?.stats?.views, 2)} views`} </span>
            <span className='flex text-[24px] text-white/[0.7] leading-none font-bold top-[-10px] relative mx-1'>.</span>
            <span className='truncate'>
              {video.publishedTimeText}
            </span>
          </div>
        </div>
      </div>
    </div>

  </Link>
}

export default VideoCard