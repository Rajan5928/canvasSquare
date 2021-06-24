const canvas = document.querySelector('canvas');
const reset = document.querySelector('button');


canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const ctx = canvas.getContext('2d');


var x,y,p,q;
var shapes=[];
function makeRect(event){
   p = event.clientX;
   q = event.clientY;
 
  X()
}
canvas.addEventListener('dblclick',(event)=>{
  let a = event.clientX;
  let b = event.clientY;
  for(let i of shapes){
    if(Math.min(i.x,i.p)<=a && a<= Math.max(i.x,i.p) && Math.max(i.y,i.q)>=b && b>=Math.min(i.y,i.q)){
      ctx.clearRect(i.x,i.y, i.p-i.x,i.q-i.y);
      
    }
  }
  
});
canvas.addEventListener('mousedown',(event)=>{
  x = event.clientX;
  y = event.clientY;
  canvas.addEventListener('mouseup',makeRect);
  
  var a='#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
ctx.fillStyle=a
})
 function X(){
   if(x!==p && y!==q){
    shapes.push({x,y,p,q})
    ctx.fillRect(x,y,p-x,q-y);
   }
 }
reset.addEventListener('click',()=>{
ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
})

