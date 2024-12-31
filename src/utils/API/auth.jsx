import axios from 'axios';

export const client_id = 'a3mobvekb51hr5roxcv28nnoy50eyb';
export const client_secret = 'ilgl7f0y2rmew3pt005gxi8d498cly';
export const userId = '73434833';

export const getToken = async () => {
  try {
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
    console.error(
      'Error fetching token:',
      error.response?.data || error.message
    );
    throw error;
  }
};
