import axios from 'axios';

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

export const client_id = 'a3mobvekb51hr5roxcv28nnoy50eyb';
export const client_secret = 'ilgl7f0y2rmew3pt005gxi8d498cly';
export const userId = '73434833';

export const getToken = async () => {
  try {
    if (isPrerender()) {
      return '';
    }
    const response = await axios.post(
      'https://id.twitch.tv/oauth2/token',
      null,
      {
        params: {
          client_id,
          client_secret,
          grant_type: 'client_credentials',
        },
      }
    );

    // console.log('Token:', response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error.response?.data || error.message);
    if (isPrerender()) {
      return '';
    }
    throw error;
  }
};
