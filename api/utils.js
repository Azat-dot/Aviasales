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

function toHoursAndMinutes(allMinutes) {
    const minutes = allMinutes % 60;
    const hours = Math.floor(allMinutes / 60)
    
    return `${to2Digits(hours)}ч ${to2Digits(minutes)}м`
}

function to2Digits(time) {
    return time.toString().padStart(2, '0');
}


function timeOfArrival(date, minutes){
    let dateAddedMinutes = new Date(date.getTime() + (minutes * 60000))
    return `${to2Digits(dateAddedMinutes.getHours())}:${to2Digits(dateAddedMinutes.getMinutes())}`
}

export { setActive, onlyOne, getSortNumber, setDefaultStop, toHoursAndMinutes, to2Digits, timeOfArrival} 