import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import { getVideo } from 'utils/API/api';
import { userId } from 'utils/API/auth';
import { BackDropStyled } from './backDrop.styled';
import { PlayIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet-async';
import SeoText from './SeoText';

const LastStreams = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const width = 640;
  const height = 360;

  useEffect(() => {
    const fetchVideos = async () => {
      const videoData = await getVideo(userId);
      setVideos(videoData);
      setLoading(false);
    };
    fetchVideos();
  }, []);

  if (loading) {
    return (
      <BackDropStyled>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#8742f5"
          secondaryColor="#c09afc"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass="loaderStyle"
        />
      </BackDropStyled>
    );
  }

  function formatDuration(duration) {
    const match = duration.match(/(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/);

    if (!match) {
      throw new Error('Invalid duration format');
    }

    const hours = parseInt(match[1] || 0, 10);
    const minutes = parseInt(match[2] || 0, 10);
    const seconds = parseInt(match[3] || 0, 10);

    // Форматуємо години, хвилини та секунди
    const formattedHours = hours.toString();
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <>
      <Helmet>
        <title>Останні стріми — Hunt3R на Twitch 🎮 Дивись онлайн</title>
        <meta
          name="description"
          content="Переглядай останні стріми Hunt3R на Twitch. Нові трансляції, ігри та моменти в прямому ефірі. Долучайся до спільноти глядачів і не пропусти новий стрім Hunt3R."
        />
        <link
          rel="canonical"
          href={
            (process.env.PUBLIC_URL || '').replace(/\/$/, '') + '/laststream'
          }
        />
        <meta property="og:title" content="Last Streams — VODs" />
        <meta
          property="og:description"
          content="Переглядай останні стріми Hunt3R на Twitch. Нові трансляції, ігри та моменти в прямому ефірі. Долучайся до спільноти глядачів і не пропусти новий стрім Hunt3R."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={
            (process.env.PUBLIC_URL || '').replace(/\/$/, '') + '/laststream'
          }
        />
        <meta
          property="og:image"
          content={
            (process.env.PUBLIC_URL || '').replace(/\/$/, '') +
            '/hunter-cover.jpg'
          }
        />
      </Helmet>
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h1 className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Список відео
          </h1>
          <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {videos.data.map(el => (
              <a
                href={el.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative border rounded-lg shadow-md bg-white twitchLink"
                key={el.id}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={el.thumbnail_url
                      .replace('%{width}', width)
                      .replace('%{height}', height)}
                    alt={el.title}
                    className="w-full object-cover rounded-md relative"
                  />
                  <p className="text-sm font-medium text-white absolute bottom-2 right-2 bg-black bg-opacity-60 px-1 rounded-sm z-20">
                    {formatDuration(el.duration)}
                  </p>
                  <p className="text-sm font-medium text-white absolute bottom-2 left-2 bg-black bg-opacity-60 px-1 rounded-sm z-20">
                    Переглядів: {el.view_count}
                  </p>
                  <p className="text-sm font-medium text-white absolute top-2 right-2 bg-black bg-opacity-60 px-1 rounded-sm z-20">
                    {new Date(el.created_at).toLocaleDateString()}
                  </p>
                  <div className="absolute z-10 top-0 right-0 w-full h-full flex items-center justify-center twitchPlay overflow-hidden rounded-md">
                    <PlayIcon
                      aria-hidden="true"
                      className="size-20 text-inherit "
                    />
                  </div>
                </div>

                <div className="px-4 pb-4">
                  <h4 className="mt-4 text-sm font-semibold text-gray-900">
                    {el.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <SeoText
              hasStreams={Array.isArray(videos?.data) && videos.data.length > 0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LastStreams;
