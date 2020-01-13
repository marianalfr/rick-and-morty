const CHARACTERS = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = () => fetch(CHARACTERS).then(response => response.json());

export {fetchCharacters};