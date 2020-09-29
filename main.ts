let grade = 0
input.onGesture(Gesture.Shake, function () {
    grade = randint(80, 100)
    basic.showNumber(grade)
    if (grade <= 84) {
        basic.showString("A-")
    } else if (grade <= 89) {
        basic.showString("A")
    } else if (grade <= 100) {
        basic.showString("A+")
    }
})
basic.forever(function () {
	
})
