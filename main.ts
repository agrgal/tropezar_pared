basic.showIcon(IconNames.Happy)
basic.showString("Mara")
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 15) {
        maqueen.motorStop(maqueen.Motors.All)
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        basic.pause(5000)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 90)
    }
})
