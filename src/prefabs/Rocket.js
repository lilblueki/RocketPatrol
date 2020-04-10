//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this); //add objects to the existing scene, display list, and update list
        this.isFiring = false; //tracks rockets firing stats
   }

   update() {
       //left/right movement
        if (!this.isFiring) { //if you are not firing
            if (keyLEFT.isDown && this.x >=47){ //left key must be down, and you cannot be outside the bounds of play
                this.x -= 2;
            } else if (keyRIGHT.isDown && this.x <= 578){
                this.x += 2;
            }
        }
        
        //fire button 
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
        }
        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        //reset on miss
        if (this.y <= 108){
            this.isFiring = false;
            this.y = 431
        }
   }

}