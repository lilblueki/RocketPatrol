class Spaceship extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this); //add objects to the existing scene, display list, and update list
        this.points = pointValue;
   }

   update() {
       //move spaceship left
       this.x -= game.settings.spaceshipSpeed;
       //wrap around screen bounds
       if (this.x <= 0 - this.width) {
           this.reset();
       }
    }

    reset(){
        this.x = game.config.width;
    }
}