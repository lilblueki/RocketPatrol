class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    create(){
        //displays menu text
        this.add.text(20,20, "Rocket Patrol Menu");

        //launches the next scene
        this.scene.start("playScene");
    }
}