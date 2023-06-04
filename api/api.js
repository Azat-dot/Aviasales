const url = "http://localhost:3000/tickets";
const axios = require('axios');

/////// get all tickets by fetch

async function getTodo() {
    let response = await fetch(url);
  
    return await response.json()
  }
  
 let noStops = getTodo().then(response => {
     response.filter(item => {
      item.segments.filter(segment => console.log(segment.stops.length === 0))
    })
    })

  let oneStop = getTodo().then(response => {
    response.filter(item => {
     item.segments.filter(segment => segment.stops.length === 1)
   })
   })
   console.log(noStops);
   console.log(oneStop);



// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/////// get all tickets by axios


// async function getUser() {
//     const response = await axios.get(url);
//     console.log(response);
// }

// getUser()


// axios.get("http://localhost:3000/tickets?price=42564")
//   .then(function (response) {
//     console.log(response.data);
//   })
  