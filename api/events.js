import { cheapest, fastest, sortStops} from "./api.js";
import { SwitcherFastCheap, SwitcherBoxes} from "./constant.js";
import { setActive, onlyOne, getSortNumber, toHoursAndMinutes, to2Digits, timeOfArrival} from "./utils.js";




let switcherFastCheap = SwitcherFastCheap.CHEAPEST;
let switcherBoxes = SwitcherBoxes.ALL;

let sortedStopsTickets = {}
let cheapestTickets = {};
let fastestTickets = {};


function switcherFunction(sortedStopsTickets) {
    if (switcherFastCheap == SwitcherFastCheap.FASTEST) {
        return fastest(sortedStopsTickets)
    } else {
        return cheapest(sortedStopsTickets)
    }

}


function setDefaultTickets(tickets, switcherBoxes){
    sortedStopsTickets = sortStops(tickets, switcherBoxes )

    let sortedTickets = switcherFunction(sortedStopsTickets)

     renderTicket(sortedTickets)

}



function addEventListenerToCheckboxes(tickets, checkboxes) {
    checkboxes.forEach(e =>{
        e.onclick = function(event){
            onlyOne(event);
        let sortNumber = getSortNumber(event.target)

            if( sortNumber == 0) {switcherBoxes = SwitcherBoxes.WITHOUT_STOPS
            } else if (
                sortNumber == 1) {switcherBoxes = SwitcherBoxes.ONE_STOPS
            } else if (
                sortNumber == 2) {switcherBoxes = SwitcherBoxes.TWO_STOPS
            } else if (
                sortNumber == 3) {switcherBoxes = SwitcherBoxes.THREE_STOPS
            } else               {switcherBoxes = SwitcherBoxes.ALL}

        sortedStopsTickets = sortStops(tickets, Number(sortNumber))
        let sortedTickets = switcherFunction(sortedStopsTickets)

        renderTicket(sortedTickets)
        }
    })
}


function addEventListenerToFastest(fastestBtn) { 
    fastestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.FASTEST;
        fastestTickets = fastest(sortedStopsTickets)

        setActive(e)

        renderTicket(fastestTickets)
    }

}

function addEventListenerToCheapest(cheapestBtn){
    cheapestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.CHEAPEST
        cheapestTickets = cheapest(sortedStopsTickets);

        setActive(e)

        renderTicket(cheapestTickets)    
    }

}


function renderTicket(tickets) {
    document.getElementById('ticket').innerHTML = ""
    tickets.forEach(ticket => {
        const element = document.createElement('div')
        element.innerHTML = renderCard(ticket)
        
        document.getElementById('ticket').append(element)
    })
}


function renderCard (ticket) {

    let durationInHourTo = toHoursAndMinutes(ticket.segments[0].duration)
    let durationInHourReturn = toHoursAndMinutes(ticket.segments[1].duration)
     
 
    let dateDepartureTo = new Date(ticket.segments[0].date)
    let dateDepartureReturn = new Date(ticket.segments[1].date)
 
 
    let timeDepartureTo = `${to2Digits(dateDepartureTo.getHours())}:${to2Digits(dateDepartureTo.getMinutes())}`
    let timeDepartureReturn = `${to2Digits(dateDepartureReturn.getHours())}:${to2Digits(dateDepartureReturn.getMinutes())}`
 
    let timeArrivalTo = timeOfArrival(dateDepartureTo, ticket.segments[0].duration)
    let timeArrivalReturn = timeOfArrival(dateDepartureReturn, ticket.segments[1].duration )
 
     return  `<div class="ticket">
 
                 <div class="ticket__header">
                     <div class="ticket__price"> ${ticket.price} Р</div>
                     <div class="ticket__logo">
                         <img
                             src="https://pics.avs.io/99/36/${ticket.carrier}.png"
                             alt="${ticket.carrier}"
                         />
                     </div>
                     
                 </div>
 
                 <div class="ticket__details__wrapper">
                         <div class="ticket__details">
                             <p class="ticket__details__label"> ${ticket.segments[0].origin} - ${ticket.segments[0].destination}</p>
                             <p class="ticket__details__value"> ${timeDepartureTo} - ${timeArrivalTo}</p>
                         </div>
 
                         <div class="ticket__details">
                             <p class="ticket__details__label">  В ПУТИ</p>
                             <p class="ticket__details__value">${durationInHourTo} </p>
                         </div>
 
                         <div class="ticket__details">
                             <p class="ticket__details__label"> ${ticket.segments[0].stops.length} ПЕРЕСАДКИ </p>
                             <p class="ticket__details__value"> ${ticket.segments[0].stops} </p>
                         </div>
                 </div>
 
                 <div class="ticket__details__wrapper">
                         <div class="ticket__details">
                             <p class="ticket__details__label"> ${ticket.segments[1].origin} - ${ticket.segments[1].destination}</p>
                             <p class="ticket__details__value"> ${timeDepartureReturn} - ${timeArrivalReturn }</p>
                         </div>
 
                         <div class="ticket__details">
                             <p class="ticket__details__label">  В ПУТИ</p>
                             <p class="ticket__details__value">${durationInHourReturn} </p>
                         </div>
 
                         <div class="ticket__details">
                             <p class="ticket__details__label"> ${ticket.segments[1].stops.length} ПЕРЕСАДКИ </p>
                             <p class="ticket__details__value"> ${ticket.segments[1].stops} </p>
                         </div>
                 </div>
 
                 
 
         </div>
 
         </div>`;
 }
 

export {switcherBoxes, addEventListenerToCheapest, addEventListenerToFastest, addEventListenerToCheckboxes, setDefaultTickets}