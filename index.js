var order = parseFloat(prompt("Order?"));
    var length = 800/(Math.pow(2,order) + 1/2);
// var length = 50;
function setup() {
  createCanvas(1600, 1600);
  background(220);
  
}

function draw() {
  drawOrder(order);
}

function drawOrder(num){
  if(num == 0){push(); translate(length,length); drawType(0,0,0);pop(); return}
  if(num > 0){
    drawOrder(num-1)
    line(length,length * Math.pow(2,num),length,length * Math.pow(2,num) + length);
    push();
    translate(Math.pow(2,num) * length,0);
    
    drawOrder(num-1);
    pop();
    push();
    translate(Math.pow(2,num) * length + length,Math.pow(2,num) * length);
    rotate(PI/2);
    line(0,0,0,length);
    line(length,(-1 * Math.pow(2,num) * length) + length,0,(-1 * Math.pow(2,num) * length) + length);
    drawOrder(num-1);
    pop();
    push();
    translate(Math.pow(2,num) * length,Math.pow(2,num) * length * 2 + length);
    rotate(-PI/2);
    
    drawOrder(num-1);
    pop();
    return;
  }
}

function drawGrid(grid){
  for(var x = 0; x < grid.length; x++){
    for(var y = 0; y < grid[x].length; y++){
       drawType(grid[x][y],x,y);
    }
  }
}

function drawType(num,x,y){
  x = x * 2;
  y = y * 2;
  if(num == 0){
    line(0,0,length,0);
    line(0,0,0,length);
    line(length,0,length,length);
  }

}
