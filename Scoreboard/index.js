let homeCounter = document.getElementById("home-counter")
let guestCounter = document.getElementById("guest-counter")
let newGame = document.getElementById("new-game")

let count = 0
let guestCount = 0

function add1() {
    count += 1
    homeCounter.textContent = count
}

function add2() {
    count += 2
    homeCounter.textContent = count
}

function add3() {
    count += 3
    homeCounter.textContent = count
}

function add1Guest() {
    guestCount += 1
    guestCounter.textContent = guestCount
}

function add2Guest() {
    guestCount += 2
    guestCounter.textContent = guestCount
}

function add3Guest() {
    guestCount += 3
    guestCounter.textContent = guestCount
}

function newGameReset() {
    guestCount = 0
    count = 0
   guestCounter.textContent = 0
    homeCounter.textContent = 0
}