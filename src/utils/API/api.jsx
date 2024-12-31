import axios from 'axios';
import { client_id, getToken } from './auth';

const baseURL = 'https://api.twitch.tv/helix';

export const getUser = async (username, user) => {
  try {
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
    console.error(
      'Error fetching user data:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getVideo = async id => {
  try {
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
    console.error(
      'Error fetching user data:',
      error.response?.data || error.message
    );
    throw error;
  }
};
