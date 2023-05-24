const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://the-cocktail-db.p.rapidapi.com/search.php',
  params: {s: 'vodka'},
  headers: {
    'X-RapidAPI-Key': 'a26b34a647mshb62184be136346cp11b221jsn7ecc0ba0fe47',
    'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}