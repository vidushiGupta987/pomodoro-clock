let  sessionTime = 20
let breakTime = 5
let sessionNumber = 1

let currentSessionMinutes = 0
let currentSessionSeconds = 0
let currentBreakMinutes = 0
let currentBreakSeconds = 0

let sessionTimeText = document.getElementById("sessionTime")
let breakTimeText = document.getElementById("breakTime")
let sessionText = document.getElementById("sessionText")
let time = document.getElementById("time")
let timeBorder = document.getElementById("timeBorder")
let sessionTimeDecreaseButton = document.getElementById("sessionTimeDecrease")
let sessionTimeIncreaseButton = document.getElementById("sessionTimeIncrease")
let breakTimeDecreaseButton = document.getElementById("breakTimeDecrease")
let breakTimeIncreaseButton = document.getElementById("breakTimeIncrease")
let startPauseButton = document.getElementById("startPauseButton")
let resetButton = document.getElementById("resetButton")
let stopwatchOn = false

sessionTimeDecreaseButton.addEventListener("click", function() {
    if(sessionTime > 0) {
        sessionTime -= 1
    }
    sessionTimeText.innerHTML = sessionTime + " min"
})
sessionTimeIncreaseButton.addEventListener("click", function() {
    if(sessionTime < 99) {
        sessionTime += 1
    }
    sessionTimeText.innerHTML = sessionTime + " min"
})

breakTimeDecreaseButton.addEventListener("click", function() {
    if(breakTime > 0) {
        breakTime -= 1
    }
    breakTimeText.innerHTML = breakTime + " min"
})
breakTimeIncreaseButton.addEventListener("click", function() {
    if(breakTime < 20) {
        breakTime += 1
    }
    breakTimeText.innerHTML = breakTime + " min"
})

let timer

startPauseButton.addEventListener("click", function() {
    if(stopwatchOn) {
        startPauseButton.innerHTML = "Resume"
    }
    else {
        if(currentSessionMinutes == 0 && currentSessionSeconds == 0 && currentBreakMinutes == 0 && currentBreakSeconds == 0) {
            currentSessionMinutes = sessionTime
            currentSessionSeconds = 0
            currentBreakMinutes = breakTime
            currentBreakSeconds = 0
            time.innerHTML = currentSessionMinutes.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false}) + ":" + currentSessionSeconds.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})    
            timer = setInterval(function() {
                if(stopwatchOn) {
                    if(currentSessionMinutes > 0 || currentSessionSeconds > 0) {
                        if(currentSessionSeconds == 0) {
                            if(currentSessionMinutes > 0) {
                                currentSessionSeconds = 59
                                currentSessionMinutes--
                            }
                        }
                        else {
                            currentSessionSeconds--
                        }
                        // let degree = currentSessionMinutes/sessionTime * 360
                        // degree += (currentSessionSeconds/60)/sessionTime * 360
                        // timeBorder.style.backgroundImage = "";
                        time.innerHTML = currentSessionMinutes.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false}) + ":" + currentSessionSeconds.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
                    } 
                    else if(currentBreakMinutes > 0 || currentBreakSeconds > 0){
                        sessionText.innerHTML = "Break Time!"
                        time.style.color = "indianred"
                        if(currentBreakSeconds == 0) {
                            if(currentBreakMinutes > 0) {
                                currentBreakSeconds = 59
                                currentBreakMinutes--
                            }
                        }
                        else {
                            currentBreakSeconds--
                        }
                        // let degree = currentBreakMinutes/breakTime * 360
                        // degree += (currentBreakSeconds/60)/breakTime * 360
                        // timeBorder.style.backgroundImage = "";
                        time.innerHTML = currentBreakMinutes.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false}) + ":" + currentBreakSeconds.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
                    }
                    else {
                        sessionNumber++
                        sessionText.innerHTML = "Session " + sessionNumber
                        time.style.color = "darkcyan"
                        currentSessionMinutes = sessionTime
                        currentSessionSeconds = 0
                        currentBreakMinutes = breakTime
                        currentBreakSeconds = 0
                        time.innerHTML = currentSessionMinutes.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false}) + ":" + currentSessionSeconds.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
                    }
                }
            }, 1000)
        }
        startPauseButton.innerHTML = "Pause"
    }
    stopwatchOn = !stopwatchOn
})

resetButton.addEventListener("click", function() {
    currentSessionMinutes = 0
    currentSessionSeconds = 0
    currentBreakMinutes = 0
    currentBreakSeconds = 0
    startPauseButton.innerHTML = "Start"
    clearInterval(timer)
    sessionNumber = 1
    sessionText.innerHTML = "Session " + sessionNumber
    time.style.color = "darkcyan"
    stopwatchOn = false
    time.innerHTML = currentSessionMinutes.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false}) + ":" + currentSessionSeconds.toLocaleString('en-US',{minimumIntegerDigits:2, useGrouping:false})
})
