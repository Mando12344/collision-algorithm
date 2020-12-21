function setup(){
  createCanvas(400,400);
  fr=createSprite(200,100,50,10);
  mr=createSprite(300,200,20,50);
  fr.shapeColor="green";
  mr.shapeColor="green";
}
function draw(){
  background("white");
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  if(mr.x-fr.x < mr.width/ 2  + fr.width / 2 
    && fr.x-mr.x < mr.width / 2 + fr.width /2
    && mr.y-fr.y < mr.height/ 2  + fr.height / 2 
      && fr.y-mr.y < mr.height/ 2 + fr.height /2 ){
    mr.shapeColor="red";
    fr.shapeColor="blue";
  }else{

  
  
   mr.shapeColor="green";
   fr.shapeColor="green";

  }
  drawSprites();
}