const url = "http://localhost:3000/tickets";
const axios = require('axios');

/////// get all tickets by fetch

// async function getTodo() {
//     let response = await fetch(url);
  
//     return await response.json()
//   }
  
//   getTodo().then(response => console.log(response));

// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/////// get all tickets by axios


// async function getUser() {
//     const response = await axios.get(url);
//     console.log(response);
// }

// getUser()


axios.get("http://localhost:3000/tickets?price=42564")
  .then(function (response) {
    console.log(response.data);
  })
  