pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) >= 1000) {
        basic.showArrow(ArrowNames.North)
    } else if (pins.analogReadPin(AnalogPin.P1) <= 30) {
        basic.showArrow(ArrowNames.South)
    }
    if (pins.analogReadPin(AnalogPin.P2) >= 1000) {
        basic.showArrow(ArrowNames.East)
    } else if (pins.analogReadPin(AnalogPin.P2) <= 30) {
        basic.showArrow(ArrowNames.West)
    }
})
