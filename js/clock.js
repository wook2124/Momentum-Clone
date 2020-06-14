const timer = document.querySelector('.js-clock')
let overTime = true

function setTime(hour) {
    if (hour > 12 && overTime) {
        hour -= 12
    }
    return hour
}

function getTime() {
    const dateNow = new Date()
    let hour = dateNow.getHours()
    const hour24 = dateNow.getHours()
    const minute = dateNow.getMinutes()
    const seconds = dateNow.getSeconds()

    hour = setTime(hour)

    timer.innerHTML =
        `
            ${hour24 < 12 ? 'AM' : 'PM'}
            ${hour < 10 ? `0${hour}` : hour} :
            ${minute < 10 ? `0${minute}` : minute}
        `
}

function init() {
    getTime()
    setInterval(getTime, 1000)
}

init()