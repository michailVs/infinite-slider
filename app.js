const img = [0, 1, 2]
const slider = document.querySelector('.slider')
const leftRow = document.querySelector('.row__left')
const rightRow = document.querySelector('.row__right')

let count = 0

function moveRight() {
    leftRow.disabled = true
    rightRow.disabled = true
    if (count > 2) {
        count = 0
    }
    const sliderImg = document.querySelector('.slider__img')
    sliderImg.style.left = `-430px`
    setTimeout(() => {
        slider.innerHTML = ``
        slider.innerHTML = `
            <img src="./img/${count}.jpg" alt="PC" class="slider__img">
        `
    }, 600)
    if (count < 2) {
        count++
    } else {
        count = 0
    }
    setTimeout(() => {
        leftRow.disabled = false
        rightRow.disabled = false
    }, 700)
}

function moveLeft() {
    leftRow.disabled = true
    rightRow.disabled = true
    if (count < 0) {
        count = 2
    }
    const sliderImg = document.querySelector('.slider__img')
    sliderImg.style.left = `430px`
    setTimeout(() => {
        slider.innerHTML = ``
        slider.innerHTML = `
            <img src="./img/${count}.jpg" alt="PC" class="slider__img">
        `
    }, 600)
    if (count > 0) {
        count--
    } else {
        count = 2
    }
    setTimeout(() => {
        leftRow.disabled = false
        rightRow.disabled = false
    }, 700)
}

leftRow.addEventListener('click', moveLeft)
rightRow.addEventListener('click', moveRight)

setInterval(() => {
    moveRight()
}, 10000);