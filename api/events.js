import { cheapest, fastest, sortStops} from "./api.js";
import { SwitcherFastCheap, SwitcherBoxes} from "./constant.js";
import { setActive, onlyOne, getSortNumber} from "./utils.js";
import  renderTicket  from "./render.js";




let switcherFastCheap = SwitcherFastCheap.CHEAPEST;
let switcherBoxes = SwitcherBoxes.ALL;

let sortedStopsTickets = {}
let cheapestTickets = {};
let fastestTickets = {};


function switchFunction(sortedStopsTickets) {
    if (switcherFastCheap == SwitcherFastCheap.FASTEST) {
        return fastest(sortedStopsTickets)
    } else {
        return cheapest(sortedStopsTickets)
    }

}


function setDefaultTickets(tickets, switcherBoxes){
    sortedStopsTickets = sortStops(tickets, switcherBoxes )

    let sortedTickets = switchFunction(sortedStopsTickets)

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
        let sortedTickets = switchFunction(sortedStopsTickets)

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



 

export {switcherBoxes, addEventListenerToCheapest, addEventListenerToFastest, addEventListenerToCheckboxes, setDefaultTickets}