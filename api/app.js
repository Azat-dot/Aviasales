import { setDefaultStop, toHoursAndMinutes, to2Digits, timeOfArrival } from "./utils.js";
import { switcherBoxes, addEventListenerToCheapest, addEventListenerToFastest, addEventListenerToCheckboxes, setDefaultTickets} from "./events.js";
import { checkboxes, fastestBtn, cheapestBtn, tickets} from "./constant.js";



window.addEventListener("load", async  function() { 

    setDefaultStop(checkboxes)
    setDefaultTickets(tickets, switcherBoxes)
    addEventListenerToCheckboxes(checkboxes)
    addEventListenerToFastest(fastestBtn);
    addEventListenerToCheapest(cheapestBtn)

})




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


export {renderCard}