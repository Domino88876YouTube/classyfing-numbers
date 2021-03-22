let num = 0
let brightness = 0
input.onButtonPressed(Button.A, function () {
    num = 42
    basic.showNumber(42)
    brightness = led.brightness()
})
