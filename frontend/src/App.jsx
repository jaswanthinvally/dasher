import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'

function App() {
  const [channelId, setChannelId] = useState("");
  const apiKey = "AIzaSyDBo4cSM-HCw4DHky0fkcn6dfXqS8zUbcE";
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=US&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("Data:", data);
        setVideos(data.items);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [apiKey]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const videoIds = videos.map(video => video.id).join(',');
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${apiKey}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const statisticsData = await response.json();
        console.log("Statistics Data:", statisticsData);
        setVideos(prevVideos => {
          return prevVideos.map(video => {
            const statistics = statisticsData.items.find(item => item.id === video.id);
            if (statistics) {
              return { ...video, statistics: statistics.statistics };
            }
            return video;
          });
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (videos.length > 0) {
      fetchStatistics();
    }
  }, [videos, apiKey]);

  return (
    <div>
    <div className='text-center'>
    <label className='font-bold text-2xl'>ENTER THE CHANNEL ID</label><br></br>
      <input
      className='m-3 p-1 text-center'
        placeholder='enter the channel id'
        onChange={(e) => setChannelId(e.target.value)}
        value={channelId}
      />
      <Navbar/>
    </div>
      <div className='flex flex-wrap justify-center'>
        {videos.map((video, index) => (
          <div key={index} className='h-[180px] w-[300px] bg-green-300 m-3 p-3 rounded-3xl justify-center'>
            <h1>Title: {video.snippet.title}</h1>
            <h1>Published at: {video.snippet.publishedAt}</h1>
            {video.statistics && (
              <>
                <h1>Likes: {video.statistics.likeCount}</h1>
                <h1>Dislikes: {video.statistics.dislikeCount}</h1>
                <h1>Views: {video.statistics.viewCount}</h1>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
