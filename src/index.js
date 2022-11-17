///////////////////////////////////////////////////
import { Application,Sprite,Container,Texture,Assets,AnimatedSprite } from "pixi.js"; 

import hello from "./hello.ts";

hello();


const app = new Application({width:800,height:350, background: '#1099bb' });
// app.stage.addChild()
document.body.appendChild(app.view);

const bgTex = Texture.from('../images/background.png');


const background = new Sprite(bgTex);
background.width = app.renderer.screen.width;
background.height = app.renderer.screen.height;
app.stage.addChild(background);
//////////////////////////

const capGuyContainer = new Container();

let anim;

Assets.load("../images/capGuyAnimated/capGuy.json").then(() => {
    // create an array of textures from an image path
    const frames = [];

    for (let i = 0; i < 8; i++) {
        const val = `walk_0${i+1}.png`;
            //i < 10 ? `0${i}` : i;

        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(Texture.from(val));
    }

    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
     anim = new AnimatedSprite(frames);

    /*
     * An AnimatedSprite inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    anim.scale.x = 0.5;
    anim.scale.y = 0.5;
// anim.scale(0.5,0.5);

    anim.x = 10;
    anim.y = 180;
    // anim.anchor.set(0.5);
    anim.animationSpeed = 0.15;
    anim.play();
    capGuyContainer.addChild(anim);
    app.ticker.add( ()=>{
        anim.x += 1;
        if (anim.x > (app.renderer.screen.width - 10) ){
            anim.x = 0;
        }
    });

});

app.stage.addChild(capGuyContainer);


