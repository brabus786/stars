import axios from 'axios';


export const getResource  = async () => {
  const response = await axios.get('https://swapi.dev/api/films/');
  console.log(response);
}


