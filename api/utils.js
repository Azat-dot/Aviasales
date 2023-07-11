
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

export {toHoursAndMinutes, to2Digits, timeOfArrival} 