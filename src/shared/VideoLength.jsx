import React from 'react';
import moment from 'moment'; 

const VideoLength = ({time}) => {
    const videoLugthInSeconds = moment()
    .startOf('day')
    .seconds(time)
    .format('H:mm:ss');

  return (
    <div className='absolute bottom-2 right-2 text-sm bg-black py-1 px-2 rounded-md text-white'>
      {videoLugthInSeconds}
    </div>
  )
}

export default VideoLength
