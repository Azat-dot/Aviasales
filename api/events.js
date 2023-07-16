import { cheapest, fastest, sortStops} from "./api.js";
import { SwitcherFastCheap, SwitcherBoxes} from "./constant.js";
import  render  from "./render.js";


let sortedStopsTickets = [];



function setDefaultTickets(tickets, switcherBoxes, switcherFastCheap){
    sortedStopsTickets = sortStops(tickets, switcherBoxes )

    let sortedTickets = switchFunction(sortedStopsTickets, switcherFastCheap)

     render(sortedTickets)

}


function addEventListenerToCheckboxes(tickets, checkboxes, switcherFastCheap, switcherBoxes) {
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
        let sortedTickets = switchFunction(sortedStopsTickets, switcherFastCheap)
        render(sortedTickets)
        }
    })
}

function addEventListenerToFastest(fastestBtn, fastestTickets, switcherFastCheap) { 
    fastestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.FASTEST;
        fastestTickets = fastest(sortedStopsTickets)


        setActive(e)

        render(fastestTickets)
    }

}

function addEventListenerToCheapest(cheapestBtn, cheapestTickets,  switcherFastCheap){
    cheapestBtn.onclick = (e) => {
        switcherFastCheap = SwitcherFastCheap.CHEAPEST
        cheapestTickets = cheapest(sortedStopsTickets);

        setActive(e)

        render(cheapestTickets)    
    }

}



function switchFunction(sortedStopsTickets, switcherFastCheap) {
    if (switcherFastCheap == SwitcherFastCheap.FASTEST) {
        return fastest(sortedStopsTickets)
    } else {
        return cheapest(sortedStopsTickets)
    }
}

function setActive(event) {
    let target = event.target || event.srcElement
    let buttons = document.getElementsByName("btn")
  
    buttons.forEach(button => {
        if (button === target && !button.classList.contains("btn_active")) {
                return button.classList.add("btn_active");
        } 
        return button.classList.remove("btn_active");
    }) 
}

function onlyOne(e) {
    let checkboxes = document.getElementsByName('check')
    checkboxes.forEach(item => {
        if (item !== e.srcElement) {item.checked = false}
        else {item.checked = true}
    })
}

function setDefaultStop(checkboxes) {
    let defaultCheckbox = Array.from(checkboxes).find(item => {
        let sort = getSortNumber(item)
        return sort == -1
        })
        defaultCheckbox.checked = true   
    }

function getSortNumber(checkbox) {
        return checkbox.dataset.sortType
        }
 

export {setDefaultStop, addEventListenerToCheapest, addEventListenerToFastest, addEventListenerToCheckboxes, setDefaultTickets}