const request = require('request');


//https://api.thecatapi.com/v1/breeds/search?q=

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body.length); // Print the HTML for the Google homepage.

    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body)[0];
    if (data) {
      const description = data.description;
      callback(null, description);// = console.log(desc)
    } else {
      callback(null, 'Breed not found');
    }
  });
};

module.exports = {
  fetchBreedDescription
};