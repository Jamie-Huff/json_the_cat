const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv[2];

// If you ever wanna use this callback or refer to it, for error handling you wanna say callback(error) or callback(error,null)
// For outputting values, you wanna refer to it as callback(null, description)

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    return console.log('Error Details: ', error);
  } else {
    return console.log(desc); //p2 is our description
  }
});
// fetcahBreedDescription(sib, return console.log(desc))