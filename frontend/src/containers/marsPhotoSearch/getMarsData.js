import queryString from 'query-string';

const getMarsData = async ({ sol, camera }) => {
  const query = getQueryString({ sol, camera });
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${query}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
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

export default getMarsData;
