//Create variables here
var dog,dogImg,dogImg2;
var database;
var foodStock,foodS;
function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  dog=createSprite(width/2,height/2+50);
  dog.addImage(dogImg);
  dog.scale = 0.2
 

}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage(dogImg2);
}
  drawSprites();
  //add styles here
textSize(25);
textFont("Impact");
fill("purple");
stroke(8);
text("NOTE! press up arrow to feed the drago milk",30,100);
textSize(15);
fill("black");
stroke(8);
textFont("Monotype Corsiva");
text("Milk bottles left : "+foodS,150,150)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<= 0){
    x=0;
  }else {
    x=x-1;
  }
  database.ref('/').update({
    food:x
  });
}


