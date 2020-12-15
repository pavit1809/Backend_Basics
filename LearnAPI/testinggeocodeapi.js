// Currently I have two geocoding apis
//var url='https://us1.locationiq.com/v1/search.php?key=pk.08af5fa4b900bc20a19b8acdaf2497e1&q='+address+'&format=json';
// https://nominatim.openstreetmap.org/?addressdetails=1&q=bakery+in+berlin+wedding&format=json&limit=1
//***************** TOM TOM API
//https://api.tomtom.com/search/2/geocode/Basant Bagh Hathras.JSON?key=3SoI8qjc2vjfI4g0XTFCJjxmyQ1JAup9
//Here API

// https://geocode.search.hereapi.com/v1/geocode?q=<>&apiKey=tbeKC9DJdnRIZ1p5x496OgpIUj2vbL5CWADs8czW5Rk

//////******************** */
const axios = require('axios');
var address='22 Khun Khun Ji Road Chowk Lucknow'
var address1='Taj Mahal Agra'
var url='https://api.tomtom.com/search/2/geocode/'+address1+'.JSON?key=3SoI8qjc2vjfI4g0XTFCJjxmyQ1JAup9';
var url1='https://geocode.search.hereapi.com/v1/geocode?q='+address1+'&apiKey=tbeKC9DJdnRIZ1p5x496OgpIUj2vbL5CWADs8czW5Rk'
// console.log(url)
axios.get(url1)
  .then(response => {
    console.log(response.data.items);
  })
  .catch(error => {
    console.log(error);
  });