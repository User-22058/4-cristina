controller.right.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 20, 100)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 1 1 3 3 3 3 3 1 1 3 3 3 3 
    3 3 3 1 f 3 3 3 3 3 f 1 3 3 3 3 
    3 3 3 f f 3 3 3 3 3 f f 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    2 3 2 3 3 3 3 3 3 3 3 3 3 2 3 2 
    3 2 3 2 3 3 3 3 3 3 3 3 2 3 2 3 
    3 3 3 3 3 f 3 3 3 3 f 3 3 3 3 3 
    3 3 3 3 3 3 f f f f 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
forever(function () {
    info.setScore(controller.dx(1000))
})
