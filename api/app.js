import { cheapest, fastest, sortStops, getTickets } from "./api.js";


const tickets = await getTickets();

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




const fastestBtn = document.querySelector("#quick-btn");
const cheapestBtn = document.querySelector("#cheap-btn");
const checkboxes = document.querySelectorAll(".input");

function setDefaultStop(checkboxes) {
let defaultCheckbox = Array.from(checkboxes).find(item => {
    let sort = getSortNumber(item)
    return sort == -1
    })
    defaultCheckbox.checked = true
    
}

function onlyOne(e) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach(item => {
        if (item !== e.srcElement) {item.checked = false}
        else {item.checked = true}
    })
}



function getSortNumber(checkbox) {
return checkbox.dataset.sortType
}


function switcherFunction() {
    if (switcherFastCheap == SwitcherFastCheap.FASTEST) {
        sortedStopsTickets = fastest(sortedStopsTickets)
    } else {
        sortedStopsTickets = cheapest(sortedStopsTickets)
    }
}

function setDefaultTickets(tickets, switcherBoxes){

    sortedStopsTickets = sortStops(tickets, switcherBoxes )

    switcherFunction(sortedStopsTickets)

    document.getElementById('ticket').innerHTML = ""
    sortedStopsTickets.forEach(ticket => {
        const element = document.createElement('div')
        element.innerHTML = renderCard(ticket)

        document.getElementById('ticket').append(element)
    })

}


function addEventListenerToCheckboxes(checkboxes) {
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

        switcherFunction(sortedStopsTickets)


        document.getElementById('ticket').innerHTML = ""
        sortedStopsTickets.forEach(ticket => {
            const element = document.createElement('div')
            element.innerHTML = renderCard(ticket)

            document.getElementById('ticket').append(element)
        })

        }
    })
}


function addEventListenerToFastest(fastestBtn) { 
    fastestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.FASTEST;
        fastestTickets = fastest(sortedStopsTickets)

        document.getElementById('ticket').innerHTML = ""
        fastestTickets.forEach(ticket => {
            const element = document.createElement('div')
            element.innerHTML = renderCard(ticket)

            document.getElementById('ticket').append(element)
        })

        console.log(fastestTickets);
    }
}

function addEventListenerToCheapest(cheapestBtn){
    cheapestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.CHEAPEST
        cheapestTickets = cheapest(sortedStopsTickets);

        
        document.getElementById('ticket').innerHTML = ""
        cheapestTickets.forEach(ticket => {
            const element = document.createElement('div')
            element.innerHTML = renderCard(ticket)

            document.getElementById('ticket').append(element)
        })

        console.log(cheapestTickets);
        
    }
}


window.addEventListener("load", async  function() { 

    setDefaultStop(checkboxes)
    setDefaultTickets(tickets, switcherBoxes)
    addEventListenerToCheckboxes(checkboxes)
    addEventListenerToFastest(fastestBtn);
    addEventListenerToCheapest(cheapestBtn)

})

// function toggleCheapFastBtn(btn) {
//     const toggle = document.querySelector('btn'); 

//     toggle.classList.add('btn_active');

    // return `<button  class="btn btn-active>`
// }


function renderCard (ticket) {

   let durationInHourTo = Math.floor(ticket.segments[0].duration / 60)
   let durationInHourReturn = Math.floor(ticket.segments[1].duration / 60)
    


   let dateDepartureTo = new Date(ticket.segments[0].date)
   let timeTo = `${dateDepartureTo.getHours()}:${dateDepartureTo.getMinutes()}`
   
   let dateDepartureReturn = new Date(ticket.segments[1].date)
   let timeReturn = `${dateDepartureReturn.getHours()}:${dateDepartureReturn.getMinutes()}`

   

    return  `<div class="ticket tickets__item">
             <div class="ticket__wrapper">
        <p class="ticket__price"> ${ticket.price} Р</p>
        <img
        class="ticket__avia-logo"
        src="https://pics.avs.io/99/36/${ticket.carrier}.png"
        alt="${ticket.carrier}"
        />
        </div>

            <div class="ticket__col>
                    <p class="ticket__row ticket__label"> ${ticket.segments[0].origin} - ${ticket.segments[0].destination}</p>
                    <p class="ticket__col ticket__value"> ${timeTo} - ${timeTo} + ${durationInHourTo}</p>
                    
                    <p class="ticket__row ticket__label">  В ПУТИ</p>
                    <p class="ticket__col ticket__value">${durationInHourTo} </p>

                    <p class="ticket__row ticket__label"> ${switcherBoxes} ПЕРЕСАДКИ </p>
                    <p class="ticket__col ticket__value"> ${ticket.segments[0].stops} </p>
            </div>
            
            <div class="ticket__col>
                   
                    
                         </div>

            <div class="ticket__col>
                    <p class="ticket__row ticket__label"> ${ticket.segments[1].origin} - ${ticket.segments[1].destination}</p>
                    <p class="ticket__col ticket__value"> ${timeReturn} - ${timeReturn}  + ${durationInHourReturn}</p>
                    
                    <p class="ticket__row ticket__label">  В ПУТИ</p>
                    <p class="ticket__col ticket__value">${durationInHourReturn} </p>
       
                    <p class="ticket__row ticket__label"> ${switcherBoxes} ПЕРЕСАДКИ </p>
                    <p class="ticket__col ticket__value"> ${ticket.segments[1].stops} </p>
            </div>


        </div>`;
}










