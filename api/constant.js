import { getTickets } from "./api.js";

export const URL = "http://localhost:3000/tickets";
export const TICKETS_NUMBERS = 5
export const RETURN_ALL_TICKETS = -1

export const SwitcherFastCheap = {
    CHEAPEST: 0,
    FASTEST: 1,
    }

export const SwitcherBoxes = {
    ALL: -1,
    WITHOUT_STOPS: 0,
    ONE_STOPS: 1,
    TWO_STOPS: 2,
    THREE_STOPS: 3,
    }

export const checkboxes = document.querySelectorAll(".input");
export const fastestBtn = document.querySelector("#quick-btn");
export const cheapestBtn = document.querySelector("#cheap-btn");

export const tickets = await getTickets();
