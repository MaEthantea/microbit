let nowtimelod = 0
let alarmtime = 1
let 無限 = 0
let alarm = 0
let nowtime = 0
basic.showNumber(nowtime)
while (!(input.buttonIsPressed(Button.A))) {
    if (input.buttonIsPressed(Button.B)) {
        nowtimelod = 0
        nowtime += 1
        nowtimelod = nowtime
        basic.showNumber(nowtime)
    }
}
basic.showString("Next")
basic.showNumber(alarm)
while (無限 == 0) {
    if (input.buttonIsPressed(Button.B)) {
        if (nowtimelod == 24) {
            alarm = 0
            alarm += 1
            basic.showNumber(alarm)
        } else {
            alarm += 1
            basic.showNumber(alarm)
        }
    }
}
basic.forever(function () {
    if (nowtimelod == 24) {
        nowtimelod = 0
    } else {
        basic.pause(3600000)
        nowtimelod += 1
    }
})
basic.forever(function () {
    if (alarm - nowtimelod < 1) {
        alarmtime = alarm - nowtimelod + 24
    } else {
        alarmtime = alarm - nowtimelod
    }
})
loops.everyInterval(alarmtime * 3600000, function () {
    while (false) {
        basic.showString("吃藥了！")
    }
})
