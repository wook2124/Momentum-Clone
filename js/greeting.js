const form = document.querySelector('.js-form'),
    input = form.querySelector('.form__input'),
    container = document.querySelector('.form-section')

const USER_NAME = "currentUser"

function saveName(name) {
    localStorage.setItem(USER_NAME, name)
}

function getSubmit(event) {
    event.preventDefault();
    const inputValue = input.value
    saveName(inputValue)
    getName()
}

function setName() {
    form.classList.add('show')
    form.addEventListener("submit", getSubmit)
}

function showName(userNow) {
    console.log(userNow)
    form.classList.remove('show')

    const title = document.createElement('span')
    title.classList.add("title__span")
    title.innerText = `Hello, ${userNow}😄`
    container.appendChild(title)
}

function getName() {
    const userNow = localStorage.getItem(USER_NAME)

    if (userNow === null) {
        setName()
    } else {
        showName(userNow)
    }
}

function init() {
    getName()
}

init()