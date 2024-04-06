import axios from 'axios';

export const getUserInfo = async ({ latitude, longitude }) => {
  const apiKey = '5692cfe03678440ebce4ca3606fecea8';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}`;
  const { data } = await axios.get(urlPosition, {
    params: {
      key: apiKey,
      language: 'en',
    },
  });
  return data;
};
