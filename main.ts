Player.onChat("computer", function () {
    blocks.place(Block.IRON_BLOCK, pos(1, 0, 0))
    blocks.place(BLOCK.GLASS, pos(1, 1, 0))
    blocks.place(BLOCK.IRON_BLOCK, pos(0, 0, 0))
    blocks.place(BLOCK.IRON_BLOCK, pos(2, 0, 0))
})
player.onChat("city", function () {
    // Clear the area
    blocks.fill(
        AIR,
        pos(-30, 0, -30),
        pos(30, 30, 30),
        FillOperation.Replace
    )

    // Roads
    blocks.fill(
        GRAY_CONCRETE,
        pos(-30, 0, -3),
        pos(30, 0, 3),
        FillOperation.Replace
    )

    blocks.fill(
        GRAY_CONCRETE,
        pos(-3, 0, -30),
        pos(3, 0, 30),
        FillOperation.Replace
    )

    // Buildings
    makeBuilding(pos(10, 0, 10), 7, 10)
    makeBuilding(pos(10, 0, -20), 9, 15)
    makeBuilding(pos(-20, 0, 10), 8, 12)
    makeBuilding(pos(-20, 0, -20), 10, 18)

    // Park
    blocks.fill(
        GRASS_BLOCK,
        pos(7, 0, -2),
        pos(20, 0, 2),
        FillOperation.Replace
    )

    // Trees
    makeTree(pos(10, 1, 0))
    makeTree(pos(15, 1, 0))
    makeTree(pos(20, 1, 0))

    player.say("🏙️ City generated!")
})

function makeBuilding(p: Position, width: number, height: number) {
    // Building
    blocks.fill(
        BRICKS,
        p,
        pos(p.getValue(Axis.X) + width, height, p.getValue(Axis.Z) + width),
        FillOperation.Hollow
    )

    // Floor
    blocks.fill(
        STONE,
        pos(p.getValue(Axis.X), 0, p.getValue(Axis.Z)),
        pos(p.getValue(Axis.X) + width, 0, p.getValue(Axis.Z) + width),
        FillOperation.Replace
    )

    // Windows
    for (let y = 3; y < height; y += 4) {
        blocks.fill(
            GLASS,
            pos(p.getValue(Axis.X), y, p.getValue(Axis.Z) + 2),
            pos(p.getValue(Axis.X), y + 1, p.getValue(Axis.Z) + width - 2),
            FillOperation.Replace
        )
    }
}

function makeTree(p: Position) {
    blocks.fill(
        OAK_LOG,
        p,
        pos(p.getValue(Axis.X), 4, p.getValue(Axis.Z)),
        FillOperation.Replace
    )

    blocks.fill(
        OAK_LEAVES,
        pos(p.getValue(Axis.X) - 2, 3, p.getValue(Axis.Z) - 2),
        pos(p.getValue(Axis.X) + 2, 6, p.getValue(Axis.Z) + 2),
        FillOperation.Replace
    )
}
player.onChat("phone", function () {
    player.give(
        NETHERITE_SWORD,
        1
    )
    player.say("📱 Phone added to your inventory!")
})

player.onChat("apps", function () {
    player.say("📱 PHONE")
    player.say("YouTube | Maps | Music | Games")
})

player.onChat("youtube", function () {
    player.say("▶️ YouTube opened!")
})

player.onChat("maps", function () {
    player.say("🗺️ Maps opened!")
})

player.onChat("music", function () {
    player.say("🎵 Music opened!")
})
player.onChat("tv", function () {
    // TV screen
    blocks.fill(
        BLACK_CONCRETE,
        pos(1, 1, 0),
        pos(9, 5, 0),
        FillOperation.Replace
    )

    // Screen
    blocks.fill(
        BLUE_CONCRETE,
        pos(2, 2, -1),
        pos(8, 4, -1),
        FillOperation.Replace
    )

    // TV stand
    blocks.fill(
        BLACK_CONCRETE,
        pos(4, 0, 0),
        pos(6, 0, 0),
        FillOperation.Replace
    )

    player.say("📺 TV placed!")
})

player.onChat("watch", function () {
    player.say("📺 TV MENU")
    player.say("YouTube | Music | Games | News")
})

player.onChat("youtube", function () {
    player.say("▶️ YouTube opened on the TV!")
})

player.onChat("music", function () {
    player.say("🎵 Music opened on the TV!")
})

player.onChat("games", function () {
    player.say("🎮 Games opened on the TV!")
})
let sitting = false

player.onChat("chair", function () {
    // Seat
    blocks.place(OAK_PLANKS, pos(0, 1, 0))

    // Legs
    blocks.place(OAK_PLANKS, pos(0, 0, 0))
    blocks.place(OAK_PLANKS, pos(1, 0, 0))

    // Back
    blocks.fill(
        OAK_PLANKS,
        pos(0, 2, 0),
        pos(1, 3, 0),
        FillOperation.Replace
    )

    player.say("🪑 Chair placed!")
})

player.onChat("sit", function () {
    sitting = true
    player.teleport(pos(0, 2, 0))
    player.say("🪑 Sitting!")
})

player.onChat("stand", function () {
    sitting = false
    player.teleport(pos(0, 3, 2))
    player.say("🚶 Standing!")
})

loops.forever(function () {
    if (sitting) {
        player.teleport(pos(0, 2, 0))
    }
    loops.pause(500)
})
let sofaSitting = false

player.onChat("sofa", function () {
    // Sofa seats
    blocks.fill(
        RED_WOOL,
        pos(0, 1, 0),
        pos(2, 1, 0),
        FillOperation.Replace
    )

    // Sofa back
    blocks.fill(
        RED_WOOL,
        pos(0, 2, 0),
        pos(2, 3, 0),
        FillOperation.Replace
    )

    // Sofa arms
    blocks.fill(
        RED_WOOL,
        pos(0, 2, 1),
        pos(0, 3, 1),
        FillOperation.Replace
    )

    blocks.fill(
        RED_WOOL,
        pos(2, 2, 1),
        pos(2, 3, 1),
        FillOperation.Replace
    )

    // Legs
    blocks.place(
        OAK_PLANKS,
        pos(0, 0, 0)
    )
    blocks.place(
        OAK_PLANKS,
        pos(2, 0, 0)
    )

    player.say("🛋️ Sofa placed!")
})

player.onChat("sofasit", function () {
    sofaSitting = true
    player.teleport(pos(1, 2, 1))
    player.say("🛋️ Sitting on sofa!")
})

player.onChat("sofastand", function () {
    sofaSitting = false
    player.teleport(pos(1, 3, 2))
    player.say("🚶 Standing!")
})

loops.forever(function () {
    if (sofaSitting) {
        player.teleport(pos(1, 2, 1))
    }
    loops.pause(500)
})
let lampOn = false

player.onChat("lamp", function () {
    // Lamp base
    blocks.place(IRON_BLOCK, pos(0, 0, 0))
    blocks.place(IRON_BLOCK, pos(0, 1, 0))

    // Lamp shade
    blocks.place(GLOWSTONE, pos(0, 2, 0))

    player.say("💡 Lamp placed!")
})

player.onChat("lighton", function () {
    lampOn = true

    blocks.place(GLOWSTONE, pos(0, 2, 0))

    player.say("💡 Lamp ON!")
})

player.onChat("lightoff", function () {
    lampOn = false

    blocks.place(IRON_BLOCK, pos(0, 2, 0))

    player.say("🌑 Lamp OFF!")
})