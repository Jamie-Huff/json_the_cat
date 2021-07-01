const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

//https://api.thecatapi.com/v1/breeds/search?q=


request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body.length); // Print the HTML for the Google homepage.
  if (error) {
    console.error(error)
  } else if (JSON.parse(body).length < 1) {
    const data = `Error, cat breed not found`
    console.log(`${data}, Status Code: ${response.statusCode}.`)
  } else if (response.statusCode !== 200) {  
    const data = `Invalid search result`
    console.warn(data, response.statusCode)
  } else {
      const data = JSON.parse(body);
      console.log(data)
      //console.log(data[0]['description'])
  }
});