import queryString from 'query-string';

const getMarsData = async ({ sol, camera }) => {
  const api_key = process.env.NASA_API_KEY;
  const query = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${queryString.stringify(
    { sol, camera, api_key }
  )}`;
  console.log(query);
  const res = await fetch(query);
  const data = await res.json();
  console.log(data);
  return data;
};

export default getMarsData;
