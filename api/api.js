import { URL, STOPS_NUMBER, TICKETS_NUMBERS } from "./constant";


// const stopsNumbers = 3
// const ticketsNumbers = 5

async function getTodo() {
    let response = await fetch(URL);
  
    return await response.json()
  }

// getTodo().then(response => console.log(response))
getTodo().then(response => console.log(fastest(response.slice(0, TICKETS_NUMBERS))))
getTodo().then(response => console.log(cheapest (response, TICKETS_NUMBERS)))
getTodo().then(response => console.log(sortStops(response, STOPS_NUMBER)))


function fastest (response) {
  return response.sort((a, b) => {
   
    let aDuration = a.segments.reduce((prev, curr) => prev + curr.duration, 0)
    let bDuration = b.segments.reduce((prev, curr) => prev + curr.duration, 0)
    
     return (aDuration - bDuration)
  })
}


function cheapest (response, TICKETS_NUMBERS ) {
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