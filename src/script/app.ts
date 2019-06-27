//@ts-check
import * as PIXI from 'pixi.js';
const canvas=<HTMLCanvasElement>document.getElementById('myCanvas');
const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,  
    transparent: false,
    resolution: 1,
    view:canvas,
    backgroundColor:579532
  }
)
//task#1
app.loader
  .add('poker_10','../../assets/10D.svg')
  .load(setup);
function setup() {
    const sprites=[];
      for(let i=0;i<144;i++){
        let sprite=new PIXI.Sprite(
            app.loader.resources['poker_10'].texture
          );
          let xPositon=20+0.5*i;
          let yPositon=50+2*i
          sprite.position.set(xPositon,yPositon)
            sprites.push(sprite)
            app.stage.addChild(sprite);
        }
        for(let j=0;j<144;j++){
           
            
        }        
}

function cardMove(){
    for(let i=0;i<144;i++){

    }
}
// creatSprite()
