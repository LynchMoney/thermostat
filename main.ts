music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.pause(5000)
basic.forever(function () {
    if (input.temperature() > 20) {
        basic.showIcon(IconNames.Asleep)
    }
    if (input.temperature() > 15 && input.temperature() < 20) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.temperature() < 15) {
        basic.showIcon(IconNames.Sad)
    }
    basic.pause(3000)
    basic.clearScreen()
    for (let index = 0; index < 3; index++) {
        basic.showNumber(input.temperature())
    }
})
