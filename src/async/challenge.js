const fetchData = require('../utils/fetch-data');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFucntion = async () => {
  try {
    const characters = await fetchData(API)
    const rickSanchez = await fetchData(`${API}${characters.results[0].id}`);
    const origin = await fetchData(rickSanchez.origin.url);
    
    console.log(characters.info.count);
    console.log(rickSanchez.name);
    console.log(origin.dimension);
  } catch (err) {
    console.log(err);
  }
};

anotherFucntion();