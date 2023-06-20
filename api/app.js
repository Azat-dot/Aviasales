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
let switcherBoxes = SwitcherBoxes.ALL

function addEventListenerToCheckboxes(checkboxes) {
    checkboxes.forEach(e =>{
        e.onclick = function(event){
            onlyOne(event);
        let sortNumber = getSortNumber(event);

            if( sortNumber == 0){
                    switcherBoxes = SwitcherBoxes.WITHOUT_STOPS
            } else if (
                sortNumber == 1){
                    switcherBoxes = SwitcherBoxes.ONE_STOPS
            } else if (
                sortNumber == 2){
                    switcherBoxes = SwitcherBoxes.TWO_STOPS
            } else if (
                sortNumber == 3){
                    switcherBoxes = SwitcherBoxes.THREE_STOPS
                } else {
                    switcherBoxes = SwitcherBoxes.ALL
                }
console.log(switcherBoxes);
        let sortStopsTickets = sortStops(tickets, Number(sortNumber))
        console.log(sortStopsTickets);
        }
    })
}

function addEventListenerToFastes(fastestBtn) { 
    fastestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.FASTEST;
        const fastestTickets = fastest(tickets)
        
        const ticketsSorted = sortStops(fastestTickets);
        console.log(fastestTickets);
    }
}
function addEventListenerToCheapest(cheapestBtn){
    cheapestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.CHEAPEST
        const cheapestTickets = cheapest(tickets);

        const ticketsSorted = sortStops(cheapestTickets);
        console.log(cheapestTickets);
    }
}

addEventListenerToCheckboxes(checkboxes);
addEventListenerToFastes(fastestBtn);
addEventListenerToCheapest(cheapestBtn)