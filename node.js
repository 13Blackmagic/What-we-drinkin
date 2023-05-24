const fetch = require('node-fetch');

const url = 'https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a26b34a647mshb62184be136346cp11b221jsn7ecc0ba0fe47',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}