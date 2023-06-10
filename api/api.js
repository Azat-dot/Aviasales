const url = "http://localhost:3000/tickets";
const stopsNumbers = 3
const ticketsNumbers = 5

async function getTodo() {
    let response = await fetch(url);
  
    return await response.json()
  }

// getTodo().then(response => console.log(response))
// getTodo().then(response => console.log(fastest(response.slice(0, ticketsNumbers))))
// getTodo().then(response => console.log(chepest (response, ticketsNumbers)))
getTodo().then(response => console.log(sortStops(response, stopsNumbers)))



/////// Fastest //////////////////////////////////////////////////////////////////

function fastest (response) {
  return response.sort((a, b) => {
   
    let aDuration = a.segments.reduce((prev, curr) => prev + curr.duration, 0)
    let bDuration = b.segments.reduce((prev, curr) => prev + curr.duration, 0)
    
     return (aDuration - bDuration)
  })
}


function cheppest (response, ticketsNumbers ) {
  response.sort( (a, b) => a.price - b.price )

  return response.slice(0, ticketsNumbers)
} 

function sortStops(response, stopsNumbers) {
  return response.filter(item => {

    let segments = item.segments.filter(segment => segment.stops.length === stopsNumbers);

    return segments.length === item.segments.length
   })

}

export { cheppest, fastest, sortStops};