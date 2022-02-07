let item = 0
basic.clearScreen()
basic.forever(function () {
    item = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(item)
    basic.pause(50)
    serial.writeValue("x", item)
    if (item > 300) {
        pins.analogWritePin(AnalogPin.P1, 50)
    } else {
        pins.analogWritePin(AnalogPin.P1, 0)
    }
})
