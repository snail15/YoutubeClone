import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import YoutubeMagic from '../UI/YoutubeLoader';
import VideoCard from '../components/VideoCard';
import axios from 'axios';
import Youtube, { search } from '../api/youtube';

import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    return youtube.search(keyword);
  });

  return (
    <>
      <div>Videos {keyword ? `${keyword}` : `Hot Trends`}</div>
      {isLoading && <YoutubeMagic />}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
