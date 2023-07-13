import { setDefaultStop} from "./utils.js";
import { getTickets } from "./api.js";
import { switcherBoxes, addEventListenerToCheapest, addEventListenerToFastest, addEventListenerToCheckboxes, setDefaultTickets} from "./events.js";

export const checkboxes = document.querySelectorAll(".input");
export const fastestBtn = document.querySelector("#quick-btn");
export const cheapestBtn = document.querySelector("#cheap-btn");

let tickets = await getTickets();


window.addEventListener("load", async  function() { 

    setDefaultStop(checkboxes)
    setDefaultTickets(tickets, switcherBoxes)
    addEventListenerToCheckboxes(tickets, checkboxes)
    addEventListenerToFastest(fastestBtn);
    addEventListenerToCheapest(cheapestBtn)

})






