let num = 0
input.onGesture(Gesture.Shake, function () {
    num = randint(0, 2)
    if (num == 0) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (num == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            # # # # #
            `)
    }
})
