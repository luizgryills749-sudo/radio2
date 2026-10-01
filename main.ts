input.onButtonPressed(Button.A, function () {
    radio.sendString("33 max verstappen")
})
radio.onReceivedString(function (receivedString) {
    basic.showString("partiu nacional")
})
basic.forever(function () {
    radio.setGroup(3)
})
