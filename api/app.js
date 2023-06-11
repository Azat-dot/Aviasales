import { cheapest, fastest, sortStops } from "./api";

const sort = document.querySelector(".checker");
const fastest = document.querySelector("#quick-btn");
const cheapest = document.querySelector("#cheap-btn");



sort.onclick = sortStops()
fastest.onclick = fastest()
cheapest.onclick = cheapest()