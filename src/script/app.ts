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
app.renderer.autoResize = true
// task#1
let sprites:any[]=[];
app.loader
  .add('poker_10','../../assets/10D.svg')
  .load(setup).on('complete',gameloop)
function setup() {
      for(let i=0;i<144;i++){
        let sprite=new PIXI.Sprite(
            app.loader.resources['poker_10'].texture
          );
          sprite.scale.set(0.3)
          let xPositon=20+0.5*i;
          let yPositon=50+2*i
          sprite.position.set(xPositon,yPositon)
            sprites.push(sprite)
            app.stage.addChild(sprite);
        }
}
function gameloop(){
    app.ticker.autoStart = false;
    let j = 0;
    if(j===143){
        setInterval(function(){
            let sprite=sprites[j];
            let xv:number=(j-20)/120
            let yv:number=(sprite.y-sprites[143-j].y)/120
            app.ticker.add(function(){
                if(sprite.x<20){ 
                    sprite.x+=xv;
                    sprite.y-=yv;
                }
            })
            j===0? clearInterval():j--;
        },2000)
    }else{
    setInterval(function(){
    let sprite=sprites[143-j];
    let xv:number=(500-j)/120
    let yv:number=(sprite.y-sprites[j].y)/120
    app.ticker.add(function(){
        if(sprite.x<500){ 
            sprite.x+=xv;
            sprite.y-=yv;
        }
    })
    j>=143? clearInterval():j++;
},2000)
    }
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
