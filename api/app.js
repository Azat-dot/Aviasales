import { cheapest, fastest, sortStops, getTickets } from "./api.js";

const tickets = await getTickets();
const fastestBtn = document.querySelector("#quick-btn");
const cheapestBtn = document.querySelector("#cheap-btn");
const checkboxes = document.querySelectorAll(".input");




function getSortNumber(e) {
    let sort = e.target.dataset.sortType
    return sort
}

function onlyOne(e) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach(item => {
        if (item !== e.srcElement) item.checked = false
    })
}

const SwitcherFastCheap = {
    CHEAPEST: 0,
    FASTEST: 1,
}

const SwitcherBoxes = {
    ALL: -1,
    WITHOUT_STOPS: 0,
    ONE_STOPS: 1,
    TWO_STOPS: 2,
    THREE_STOPS: 3,
}

let switcherFastCheap = SwitcherFastCheap.CHEAPEST;
let switcherBoxes = SwitcherBoxes.ALL;
let sortedStopsTickets = {}


function addEventListenerToCheckboxes(checkboxes) {
    checkboxes.forEach(e =>{
        e.onclick = function(event){
            onlyOne(event);
        let sortNumber = getSortNumber(event);

            if( sortNumber == 0) {switcherBoxes = SwitcherBoxes.WITHOUT_STOPS
            } else if (
                sortNumber == 1) {switcherBoxes = SwitcherBoxes.ONE_STOPS
            } else if (
                sortNumber == 2) {switcherBoxes = SwitcherBoxes.TWO_STOPS
            } else if (
                sortNumber == 3) {switcherBoxes = SwitcherBoxes.THREE_STOPS
            } else               {switcherBoxes = SwitcherBoxes.ALL}


        sortedStopsTickets = sortStops(tickets, Number(sortNumber))
        console.log(sortedStopsTickets);
        }
    })
}


function addEventListenerToFastest(fastestBtn) { 
    fastestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.FASTEST;

        const fastestTickets = fastest(sortedStopsTickets)
        
        // const ticketsSorted = sortStops(fastestTickets);
        console.log(fastestTickets);
    }
}
function addEventListenerToCheapest(cheapestBtn, checkboxes){
    cheapestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.CHEAPEST
        // let sortedTickets = addEventListenerToCheckboxes(checkboxes);
        const cheapestTickets = cheapest(sortedStopsTickets);

        // const ticketsSorted = sortStops();
        console.log(cheapestTickets);
    }
}

addEventListenerToCheckboxes(checkboxes)

addEventListenerToFastest(fastestBtn);
addEventListenerToCheapest(cheapestBtn)