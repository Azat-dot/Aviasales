import { cheapest, fastest, sortStops } from "./api";

const sortBtns = document.querySelectorAll(".checker");
const fastestBtn = document.querySelector("#quick-btn");
const cheapestBtn = document.querySelector("#cheap-btn");



// sortBtns.forEach(element => {
//     element.onclick = sortStops;
// })

fastestBtn.onclick = fastest
cheapestBtn.onclick = cheapest