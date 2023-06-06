const url = "http://localhost:3000/tickets";
// const axios = require('axios');
// const { get } = require('server/router');
// const stopsNumbers = [0, 1, 2, 3]








/////// get all tickets by fetch

async function getTodo() {
    let response = await fetch(url);
  
    return await response.json()
  }

// getTodo().then(response => console.log(response))

/////////// Cheppest //////////////////////////////////////////////////////////////////

  let priceFilter = getTodo().then(response => {
    return response.filter(item => {
        

      let minPrice = (item.price < 30000)

      return minPrice
    })
    })

    priceFilter.then(response => console.log(response));


////////////////////    Sort    //////////////////////////////////////////////////////////////////


  // let stops = getTodo().then(response => {
  //   return response.filter(item => {

  //   let segments = item.segments.filter(segment => segment.stops.length === `${stopsNumbers}`);

  //   return segments.length === item.segments.length
  //  })
  //  })
  // stops.then(response => console.log(response));


 let noStops = getTodo().then(response => {
     return response.filter(item => {

     let segments = item.segments.filter(segment => segment.stops.length === 0);

     return segments.length === item.segments.length
    })
    })
  //  noStops.then(response => console.log(response));


  let oneStop = getTodo().then(response => {
    return response.filter(item => {

     let segments = item.segments.filter(segment => segment.stops.length === 1);
     return segments.length === item.segments.length
   })
   })
  // oneStop.then(response => console.log(response));


  let twoStops = getTodo().then(response => {
    return response.filter(item => {

    let segments = item.segments.filter(segment => segment.stops.length === 2)
    
    return segments.length === item.segments.length
  })
  })
  // twoStops.then(response => console.log(response));



let threeStops = getTodo().then(response => {
  return response.filter(item => {

   let segments = item.segments.filter(segment => segment.stops.length === 3)
   
   return segments.length === item.segments.length
 })
 })
//  threeStops.then(response => console.log(response));


// fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/////// get all tickets by axios   ////////////////////////////////////////////////////////////////


// async function getUser() {
//     const response = await axios.get(url);
//     console.log(response);
// }

// getUser()


// axios.get("http://localhost:3000/tickets?price=42564")
//   .then(function (response) {
//     console.log(response.data);
//   })
  