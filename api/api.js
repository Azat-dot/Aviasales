const url = "http://localhost:3000/tickets";
// const axios = require('axios');
// const { get } = require('server/router');
const stopsNumbers = 0
const ticketsNumbers = 5



/////// get all tickets by fetch

async function getTodo() {
    let response = await fetch(url);
  
    return await response.json()
  }

// getTodo().then(response => console.log(priceFilter (response, ticketsNumbers)))
// getTodo().then(response => console.log(stops(response, stopsNumbers)))
getTodo().then(response => console.log(fastest(response.slice(0, ticketsNumbers))))


/////// Fastest //////////////////////////////////////////////////////////////////

function fastest (response) {
  return response.sort((a, b) => {
   
    let aDuration = a.segments.reduce((prev, curr) => prev + curr.duration, 0)
    let bDuration = b.segments.reduce((prev, curr) => prev + curr.duration, 0)
    
     return (aDuration - bDuration)
  })
}


/////////// Cheppest //////////////////////////////////////////////////////////////////

function priceFilter (response, ticketsNumbers ) {
  response.sort( (a, b) => a.price - b.price )

  return response.slice(0, ticketsNumbers)
} 

////////////////////    Sort    //////////////////////////////////////////////////////////////////

function stops(response, stopsNumbers) {
  return response.filter(item => {

    let segments = item.segments.filter(segment => segment.stops.length === stopsNumbers);

    return segments.length === item.segments.length
   })

}
