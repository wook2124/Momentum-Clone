const body = document.querySelector("body")
const IMAGE_COUNT = 13

function getRandom() {
    return Math.floor(Math.random() * IMAGE_COUNT)
}

function setImage(ran) {
    const img = new Image()
    img.src = `wallpaper/wallpaper${ran + 1}.jpg`
    img.classList.add('bg-img')
    body.prepend(img)
}

function init() {
    const ran = getRandom()
    setImage(ran)
}

init()