import { setDefaultStop} from "./events.js";
import { getTickets } from "./api.js";
import { switcherBoxes, addEventListenerToCheapest, addEventListenerToFastest, addEventListenerToCheckboxes, setDefaultTickets} from "./events.js";
import {SwitcherFastCheap} from "./constant.js"

export const checkboxes = document.querySelectorAll(".input");
export const fastestBtn = document.querySelector("#quick-btn");
export const cheapestBtn = document.querySelector("#cheap-btn");

let tickets = await getTickets();

let switcherFastCheap = SwitcherFastCheap.CHEAPEST;




window.addEventListener("load", async  function() { 

    setDefaultStop(checkboxes)
    setDefaultTickets(tickets, switcherBoxes, switcherFastCheap)
    addEventListenerToCheckboxes(tickets, checkboxes, switcherFastCheap)
    addEventListenerToFastest(fastestBtn, switcherFastCheap);
    addEventListenerToCheapest(cheapestBtn, switcherFastCheap)

})






