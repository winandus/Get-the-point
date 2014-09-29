var tabCase;
var x =  0;
var y = 15;
var speed = 5;
var sizeCase = 235;
var canvasGame;

var canvasWidth = canvasGame.width;
var canvasHeight = canvasGame.height;

function initGameGrid(){
    
	canvasGame=document.getElementById("getThePoint");

	canvasWidth = canvasGame.width;
	canvasHeight = canvasGame.height;
    

    cGetContext = canvasGame.getContext("2d");

    // init case 
    var case0 = cGetContext;
    var case1 = cGetContext;
    var case2 = cGetContext;
    var case3 = cGetContext;
    var case4 = cGetContext;
    var case5 = cGetContext;
    var case6 = cGetContext;
    var case7 = cGetContext;
    var case8 = cGetContext;
    var case9 = cGetContext;

    tabCase = [ { caseNB:  case0, casePosY : 0,casePosX : 0},
    			{ caseNB:  case1, casePosY : 0,casePosX : 0},
    			{ caseNB:  case3, casePosY : 0,casePosX : 0},
    			{ caseNB:  case4, casePosY : 0,casePosX : 0},
    			{ caseNB:  case5, casePosY : 0,casePosX : 0},
    			{ caseNB:  case6, casePosY : 0,casePosX : 0},
    			{ caseNB:  case7, casePosY : 0,casePosX : 0},
    			{ caseNB:  case8, casePosY : 0,casePosX : 0},
    			{ caseNB:  case9, casePosY : 0,casePosX : 0}];

    var Y = 20, X= 20;
    
    var caseX = 20;
    var caseY = 20;

    //boucle de mise en place des case
    for (var i = 0; i <tabCase.length; i++) {
        for (var j = 0 ; j< tabCase.length/3; j ++) {
            
            drawCase(tabCase[i].caseNB, X, Y, sizeCase, "#3498db");
            tabCase[i].casePosX += sizeCase + 20;
            X += sizeCase + 20;

            console.log("positionX : "+X+ "\npositionY : "+ Y);
            tabCase[i].caseNB.stroke();
        };
        tabCase[i].casePosX =20;
        tabCase[i].casePosY += sizeCase + 20;
        
        X =  20;
        Y += sizeCase + 20; 
    };
    
    
}

function changeColorRandom(){
	var possible = "ABCDEF0123456789";
    var color="#";
	for (var k = 0 ; k < 6; k++) {
        color += possible.charAt(Math.floor(Math.random() * possible.length)) ;
    };

    return color;
}

function drawCase(selectedCase, caseX, caseY, sizeCase, colorStyle){
	//selectedCase.clearRect  (0, 0, canvas.width, canvas.height);
	selectedCase.fillStyle= colorStyle;
    selectedCase.fillRect(caseX,caseY,sizeCase,sizeCase);
}

function startGame(){
	

	setInterval(function () {moveCase();}, 1000/60);
}



function moveCase(){
	tabCase[0].caseNB.clearRect(0, 0, canvasWidth, canvasHeight);
	tabCase[0].caseNB.beginPath();
	tabCase[0].caseNB.beginPath();
	tabCase[0].caseNB.fillRect(tabCase[0].casePosX,caseY,sizeCase,sizeCase);

}

function animeCase(){

	var time = new Date();
	tabCase[0].rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
}



