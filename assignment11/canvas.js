var canvas = document.getElementById("game");
var context = canvas.getContext("2d");

var ballX = canvas.width/2;
var ballY = canvas.height/2;
var ballColor = 'rgb(0, 155, 155)';

var ballRadius = 50;

var speedX = 5;
var speedY = 3;
var moveRight = true;
var moveDown = true;

var score = 0;

function animate() {
	context.fillStyle = 'rgba(255,255,255 0.6)';
	context.fillRect(0,0, canvas.width, canvas.height);
	
	//draw the ball
	context.beginPath();
	context.fillStyle = ballColor;
	context.strokeStyle ='black';
	context.arc(ballX, ballY, ballRadius, 0, 2*Math.PI);
	context.fill();	
	context.stroke();


	if(ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0){
		moveRight = !moveRight;
	}
	if (ballY + ballRadius >= canvas.height || ballY - ballRadius <=0){
		moveDown = !moveDown;
	}

	if(moveRight){
		ballX = ballX + speedX;
	}
	else{
		ballX = ballX - speedX;
	}

	if(moveDown){
		ballY = ballY + speedY;
	}
	else{
		ballY = ballY - speedY;
	}


	window.requestAnimationFrame(animate);
}

animate();

canvas.addEventListener('click', function(event){
	console.log(event);

	var distX = Math.abs(ballY - event.clientX);
	var distY = Math.abs(ballX - event.clientY)

	if( ballX < ballRadius && distY < ballRadius){
		console.log('Click!!!')
		ballColor = 'orange';
		ballRadius = 1200;
	}


	function drawScore() {
	    context.font = "16px Arial";
	    context.fillStyle = "#0095DD";
	    context.fillText("Score: "+score, 8, 20);
	}

	function draw(){
	context.drawScore();
	}

	function changeColor(){
		
	}

});