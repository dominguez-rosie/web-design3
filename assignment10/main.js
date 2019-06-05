
	//---- rectangle-----//
    var c = document.getElementById("myCanvas");
    var cxt = c.getContext("2d");
    cxt.fillStyle = "#f76b86";
    cxt.fillRect(0, 0, c.width, c.height);
    cxt.fillStyle = "#FFa099";
    cxt.fillRect(20, 20, 150, 100);
    
    cxt.font = "24px Helvetica";
    cxt.textAlign = "center";
    cxt.fillText("Canvas shapes", c.width/2, c.height/2);
  

    // -------------circle-------------//
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(95, 70, 30, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fillStyle="yellow";

	//------- triangle-----------//
	var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  
  
  
