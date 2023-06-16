import { cheapest, fastest, sortStops, getTickets } from "./api.js";

const tickets = await getTickets();
const sortBtns = document.querySelectorAll(".checker");
const fastestBtn = document.querySelector("#quick-btn");
const cheapestBtn = document.querySelector("#cheap-btn");
const checkboxes = document.querySelectorAll(".input");

checkboxes.forEach(e =>{
    e.onclick = getSortNumber;
})

function getSortNumber(e) {
    let sort = e.target.dataset.sortType
    console.log(sort);
}


// checkboxes.forEach(e => {
//     e.onclick = onlyOne;
// })

function onlyOne(e) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach(item => {
        if (item !== e.srcElement) item.checked = false
    })
}






const SwitcherValues = {
    CHEAPEST: 0,
    FASTEST: 1,
}

let switcher;

// sortBtns.forEach(element => {

//     element.onclick = sortStops;
// })




fastestBtn.onclick = (e) => {
    switcher = SwitcherValues.FASTEST;
    const fastestTickets = fastest(tickets)
    
    const ticketsSorted = sortStops(fastestTickets);
    // console.log(fastestTickets);

}

cheapestBtn.onclick = (e) => {
    switcher = SwitcherValues.CHEAPEST
    const cheapestTickets = cheapest(tickets);

    const ticketsSorted = sortStops(cheapestTickets);
    // console.log(cheapestTickets);
}

console.log("app.js");
