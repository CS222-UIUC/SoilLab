var canvas = document.getElementById("GridCanvas");
var ctx = canvas.getContext("2d");
// canvas.addEventListener('click', function() { console.log("here");}, false);

// function addCrop() {
//     var elem = document.getElementById("GridCanvas");
//     var ctx = elem.getContext("2d");
//     var elemLeft = elem.offsetLeft + elem.clientLeft, elemTop = elem.offsetTop + elem.clientTop;
//     elem.addEventListener('click', function(event) { 
//       var x = event.pageX - elemLeft, y = event.pageY - elemTop;
//       ctx.fillStyle = 'red';
//       ctx.fillRect(x,y,10,10);
//     }, false);
// }

console.log(canvas);

ctx.fillStyle = 'red';
ctx.fillRect(10,10,10,10);