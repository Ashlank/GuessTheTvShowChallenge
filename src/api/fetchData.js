import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
  }
};

export default async function fetchData() {
  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data.results;
    })
    .catch(function (error) {
      console.error(error);
    });

  return data;
}
