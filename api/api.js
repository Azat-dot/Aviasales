import { URL, TICKETS_NUMBERS, RETURN_ALL_TICKETS } from "./constant.js";


let STOPS_NUMBERS = 3

async function getTickets() {
    let response = await fetch(URL);
  
    return await response.json()
  }

// getTickets().then(response => console.log(response))
// getTickets().then(response => console.log(fastest(response, TICKETS_NUMBERS)))
// getTickets().then(response => console.log(cheapest (response, TICKETS_NUMBERS)))
// getTickets().then(response => console.log(sortStops(response, STOPS_NUMBERS)))


function fastest (response, ticketsNumber = TICKETS_NUMBERS) {
   response.sort((a, b) => {
   
    let aDuration = a.segments.reduce((prev, curr) => prev + curr.duration, 0)
    let bDuration = b.segments.reduce((prev, curr) => prev + curr.duration, 0)
    
     return (aDuration - bDuration)
  })
  return response.slice(0, ticketsNumber)
}


function cheapest (response, ticketsNumber = TICKETS_NUMBERS ) {
  response.sort( (a, b) => a.price - b.price )

  return response.slice(0, ticketsNumber)
} 

function sortStops(response, stopsNumbers = STOPS_NUMBERS ) {
      if (stopsNumbers == RETURN_ALL_TICKETS) return response
  return response.filter(item => {

    let segments = item.segments.filter(segment => segment.stops.length === stopsNumbers);

    return segments.length === item.segments.length
   })

}


export { cheapest, fastest, sortStops, getTickets };  
