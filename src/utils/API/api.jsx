import axios from 'axios';
import { client_id, getToken } from './auth';

const isPrerender = () => {
  try {
    if (typeof window !== 'undefined') {
      if (window.ReactSnap || window.__react_snap__ || typeof window.snapSaveState === 'function') return true;
    }
    if (typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string') {
      if (navigator.userAgent.indexOf('ReactSnap') !== -1) return true;
    }
  } catch (_) {}
  return false;
};

const baseURL = 'https://api.twitch.tv/helix';

export const getHunt3r = async user => {
  try {
    if (isPrerender()) {
      return { data: [] };
    }
    const token = await getToken();

    const userResponse = await axios.get(
      `${baseURL}/streams?user_login=${user}`,
      {
        headers: {
          'Client-ID': client_id,
          Authorization: `Bearer ${token}`,
        },
        params: {
          login: user,
        },
      }
    );

    console.log('User Info:', userResponse.data);
    return userResponse.data;
  } catch (error) {
    console.error('Error fetching user data:', error.response?.data || error.message);
    if (isPrerender()) {
      return { data: [] };
    }
    throw error;
  }
};

export const getUser = async (username, user) => {
  try {
    if (isPrerender()) {
      return { data: [] };
    }
    const token = await getToken();

    const userResponse = await axios.get(
      `${baseURL}/streams?user_login=${user}`,
      {
        headers: {
          'Client-ID': client_id,
          Authorization: `Bearer ${token}`,
        },
        params: {
          login: username,
        },
      }
    );

    // console.log('User Info:', userResponse.data);
    return userResponse.data;
  } catch (error) {
    console.error('Error fetching user data:', error.response?.data || error.message);
    if (isPrerender()) {
      return { data: [] };
    }
    throw error;
  }
};

export const getVideo = async id => {
  try {
    if (isPrerender()) {
      return { data: [] };
    }
    const token = await getToken();

    const userResponse = await axios.get(
      `${baseURL}/videos?user_id=${id}&type=archive&first=40`, // використовуючи параметр id, а не userId
      {
        headers: {
          'Client-ID': client_id,
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // console.log('Video Info:', userResponse.data);
    return userResponse.data;
  } catch (error) {
    console.error('Error fetching user data:', error.response?.data || error.message);
    if (isPrerender()) {
      return { data: [] };
    }
    throw error;
  }
};
