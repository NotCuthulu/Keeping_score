input.onButtonPressed(Button.A, function () {
    Awful_Adults += 1
    basic.showString("Awful Adults")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    Tie += 1
    basic.showString("Tie")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Kool_Kidz += 1
    basic.showString("Kool Kidz")
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Awful Adults")
    basic.showNumber(Awful_Adults)
    basic.pause(100)
    basic.clearScreen()
    basic.showString("Kool Kidz")
    basic.showNumber(Kool_Kidz)
    basic.pause(100)
    basic.clearScreen()
    basic.showString("Tie")
    basic.showNumber(Tie)
    basic.pause(100)
    basic.clearScreen()
})
let Tie = 0
let Kool_Kidz = 0
let Awful_Adults = 0
Awful_Adults = 0
Kool_Kidz = 0
Tie = 0
