import queryString from 'query-string';
import axios from 'axios';

const getMarsPhotos = async ({ sol, camera }) => {
  const query = getQueryString({ sol, camera });
  const url = `https://mars-photo-search-api.andrew-horn-portfolio.life?${query}`;
  const res = await axios(url);
  const photos = res.data.photos;
  return photos;
};

const getQueryString = ({ sol, camera }) => {
  const queryValues = {};
  queryValues.api_key = process.env.NASA_API_KEY;
  switch (true) {
    case !sol && !camera:
      break;
    case sol && !camera:
      queryValues.sol = sol;
      break;
    case !sol && camera:
      queryValues.camera = camera;
      break;
    default:
      queryValues.sol = sol;
      queryValues.camera = camera;
  }
  const query = queryString.stringify(queryValues);
  return query;
};

export default getMarsPhotos;
