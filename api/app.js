import { setDefaultStop} from "./events.js";
import { getTickets } from "./api.js";
import { addEventListenerToCheapest, addEventListenerToFastest, addEventListenerToCheckboxes, setDefaultTickets} from "./events.js";
import {SwitcherFastCheap, SwitcherBoxes} from "./constant.js"

export const checkboxes = document.querySelectorAll(".input");
export const fastestBtn = document.querySelector("#quick-btn");
export const cheapestBtn = document.querySelector("#cheap-btn");

let tickets = await getTickets();

let switcherFastCheap = SwitcherFastCheap.CHEAPEST;
let switcherBoxes = SwitcherBoxes.ALL;

let fastestTickets = {};
let cheapestTickets = {};











window.addEventListener("load", async  function() { 

    setDefaultStop(checkboxes)
    setDefaultTickets(tickets, switcherBoxes, switcherFastCheap)
    addEventListenerToCheckboxes(tickets, checkboxes, switcherFastCheap, switcherBoxes)
    addEventListenerToFastest(fastestBtn, switcherFastCheap, fastestTickets);
    addEventListenerToCheapest(cheapestBtn, switcherFastCheap, cheapestTickets);

})






