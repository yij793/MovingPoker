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
    backgroundColor:579532,
  
  }
)
const W:number = app.screen.width;
const H:number = app.screen.height
const _w:number = window.innerWidth;
const _h:number = window.innerHeight;
window.addEventListener('resize',()=>{app.renderer.resize(_w,_h)})
app.renderer.autoResize = true;
// task#1

let is_back:boolean= false; //is the card moving back
let counter:number=0;
let isCardMoving:boolean=false;
app.loader
  .add('poker_10','../../assets/10D.svg')
  .load(setup).on('complete',gameloop)
function setup() {
      for(let i=0;i<144;i++){
        let sprite=new PIXI.Sprite(
            app.loader.resources['poker_10'].texture
          );
          sprite.scale.set(0.6)
          let xPositon=0.1*W+0.5*i;
          let yPositon=0.1*H+2*i
          sprite.position.set(xPositon,yPositon)
            app.stage.addChild(sprite);
        }
}
function gameloop(){
    app.ticker.add(()=>{
        if(!isCardMoving){
            isCardMoving=true;
            let sprite = app.stage.children[app.stage.children.length-1]//current spirit
            let fPosition = {x:0.8*W-(0.1*W+0.5*counter),y:0.1*H+2*counter};
            if(is_back)
            fPosition = {x:0.1*W+0.5*counter,y:0.1*H+2*counter};
            let steps=100;//need 100 steps to reach the location
            let timeInterval=2000 //require 2s to reach location
            let xv:number = (fPosition.x - sprite.x)/steps;
            let yv:number = (fPosition.y - sprite.y)/steps;
            let interval = setInterval(function(){
                sprite.x += xv;
                sprite.y += yv;
                if(!is_back&&sprite.x>fPosition.x||is_back&&sprite.x<fPosition.x){
                    sprite.position.set(fPosition.x,fPosition.y)
                    clearInterval(interval);
                    isCardMoving = false;
                    app.stage.children.splice(counter,0,app.stage.children.pop())
                    counter++;
                    if(counter==144){
                        counter = 0;
                        is_back = !is_back;
                    }
                }
                
        },timeInterval/steps)
    }
    })
}
//task2
// app.loader
// .add('club','../../assets/club.svg')
// .add('diamonds','../../assets/diamonds.svg')
// .add('jocker','../../assets/jocker.svg')
// .add('pug','../../assets/pug.svg')
// .add('spades','../../assets/spades.svg')
// .load(setup)
// function setup(){
//     let randomImage:string[]=['club','diamonds','jocker','pug','spades']
//     let randomNum:number=Math.floor(Math.random() * randomImage.length);
//     let sprite=new PIXI.Sprite(app.loader.resources[randomImage[randomNum]].texture);
// }
