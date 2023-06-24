import { cheapest, fastest, sortStops, getTickets } from "./api.js";


const tickets = await getTickets();
const fastestBtn = document.querySelector("#quick-btn");
const cheapestBtn = document.querySelector("#cheap-btn");
const checkboxes = document.querySelectorAll(".input");

function setDefaultStops(checkboxes) {
   let defaultCheckbox = Array.from(checkboxes).find(item => {
    let sort = item.dataset.sortType
    return sort == -1
    })

    defaultCheckbox.checked = true
}
setDefaultStops(checkboxes)


function getSortNumber(checkbox) {
    let sort;
    return sort
}

function onlyOne(e) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach(item => {
        if (item !== e.srcElement) {item.checked = false}
        else {item.checked = true}
    })
}


const SwitcherFastCheap = {
    CHEAPEST: 0,
    FASTEST: 1,
}
let switcherFastCheap = SwitcherFastCheap.CHEAPEST;

const SwitcherBoxes = {
    ALL: -1,
    WITHOUT_STOPS: 0,
    ONE_STOPS: 1,
    TWO_STOPS: 2,
    THREE_STOPS: 3,
}
let switcherBoxes = SwitcherBoxes.ALL;

let sortedStopsTickets = {}
let cheapestTickets = {};
let fastestTickets = {};

function addEventListenerToCheckboxes(checkboxes) {
    checkboxes.forEach(e =>{
        e.onclick = function(event){
            onlyOne(event);
        let sortNumber = event.target.dataset.sortType

            if( sortNumber == 0) {switcherBoxes = SwitcherBoxes.WITHOUT_STOPS
            } else if (
                sortNumber == 1) {switcherBoxes = SwitcherBoxes.ONE_STOPS
            } else if (
                sortNumber == 2) {switcherBoxes = SwitcherBoxes.TWO_STOPS
            } else if (
                sortNumber == 3) {switcherBoxes = SwitcherBoxes.THREE_STOPS
            } else               {switcherBoxes = SwitcherBoxes.ALL}


        sortedStopsTickets = sortStops(tickets, Number(sortNumber))
        if (switcherFastCheap == SwitcherFastCheap.FASTEST) {
            sortedStopsTickets = fastest(sortedStopsTickets)
        } else {
            sortedStopsTickets = cheapest(sortedStopsTickets)
        }
        
        console.log(sortedStopsTickets);
        }
    })
}


function addEventListenerToFastest(fastestBtn) { 
    fastestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.FASTEST;
        fastestTickets = fastest(sortedStopsTickets)

        console.log(fastestTickets);
    }
}
function addEventListenerToCheapest(cheapestBtn){
    cheapestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.CHEAPEST
        cheapestTickets = cheapest(sortedStopsTickets);

        console.log(cheapestTickets);
    }
}


 

addEventListenerToCheckboxes(checkboxes)
addEventListenerToFastest(fastestBtn);
addEventListenerToCheapest(cheapestBtn)

// document.getElementById('#ticket').innerHTML = JSON.stringify(cheapestTickets.price)
document.getElementById("ticket").innerHTML = `<h1>${cheapestTickets.price}</h1>`

console.log(cheapestTickets);


// class TicketCard  {
//     constructor(cheapestTickets) {
//       this._ticket = cheapestTickets;
//       this.parent = document.querySelector(parentSelector)
//       this.ticketPrice = price
//     }

//     render() {
//         const element = document.createElement('div')
    
//         element.innerHTML = 
//        `<div class="ticket tickets__item">
//             <div class="ticket__wrapper">
//               <p class="ticket__price">${ticketPrice} Р</p>
//               <img
//                 class="ticket__avia-logo"
//                 src="https://pics.avs.io/99/36/${this._ticket.carrier}.png"
//                 alt="${this._ticket.carrier}"
//               />
//             </div>
//             ${this._renderSegment()}
//           </div>`;
//             this.parent.append(element);

//     }     
//   }

 document.querySelector('.ticket').innerHTML = JSON.stringify(cheapestTickets.price)