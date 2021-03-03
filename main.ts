basic.forever(function () {
    if (input.lightLevel() == 10) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
