function setup() {
    createCanvas(400, 400);
    background("blue");
  }
  
  function draw() {
    
    stroke("green");
    fill("orange");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
          rect(mouseX,mouseY,50,50);
    }
     
    
    
    
  }
  
  