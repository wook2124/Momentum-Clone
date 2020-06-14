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
    title.innerText = `Hello, ${userNow}`
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


// const greetText = document.querySelector("#js-greet-text");

/*
function greetingMessage(hour) {
  if (hour > 5 && hour < 11) {
    greetText.textContent = "Good Morning!";
  } else if (hour >= 11 && hour < 14) {
    greetText.textContent = "It's already lunch time!";
  } else if (hour >= 14 && hour < 17) {
    greetText.textContent = "Good afternoon!";
  } else if (hour >= 17 && hour < 23) {
    greetText.textContent = "Good evening!";
  } else {
    greetText.textContent = "You did a great job today!";
  }
}
*/