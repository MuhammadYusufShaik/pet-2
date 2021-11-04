var database;
var dogImage;
var dog;
var foodCount = 0;
var addFood,minusFood
function preload() {
  dogImage = loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(600, 350, 100, 100);
  dog.addImage(dogImage);
  dog.scale = 0.3;

addFood = createButton('add food')
minusFood = createButton('minus food')

  var ref = database.ref("food");
  ref.on("value", function (data) {
    foodCount = data.val();
  });
}

function draw() {
  background("green");
  textSize(30);
  stroke("yellow");
  fill("yellow");
  text("food remaining with the dog is : " + foodCount, 50, 100);
 
  addFood.mousePressed(()=>{
    database.ref("/").update({
      food: foodCount +1,
    })
  })
  minusFood.mousePressed(()=>{
    if(foodCount<=0){
    foodCount=0
    }
    database.ref("/").update({
      food: foodCount -1,
    })
  })

  drawSprites();
}
