import { URL, TICKETS_NUMBERS } from "./constant.js";


const stopsNumbers = 3
// const ticketsNumbers = 5

async function getTickets() {
    let response = await fetch(URL);
  
    return await response.json()
  }

getTickets().then(response => console.log(response))
getTodo().then(response => console.log(fastest(response, TICKETS_NUMBERS)))
getTodo().then(response => console.log(cheapest (response, TICKETS_NUMBERS)))
getTodo().then(response => console.log(sortStops(response, stopsNumbers)))


function fastest (response, ticketsNumbers) {
   response.sort((a, b) => {
   
    let aDuration = a.segments.reduce((prev, curr) => prev + curr.duration, 0)
    let bDuration = b.segments.reduce((prev, curr) => prev + curr.duration, 0)
    
     return (aDuration - bDuration)
  })
  return response.slice(0, ticketsNumbers)
}


function cheapest (response, ticketsNumbers ) {
  response.sort( (a, b) => a.price - b.price )

  return response.slice(0, ticketsNumbers)
} 

function sortStops(response, stopsNumbers) {
  return response.filter(item => {

    let segments = item.segments.filter(segment => segment.stops.length === stopsNumbers);

    return segments.length === item.segments.length
   })

}

export { cheapest, fastest, sortStops}; 