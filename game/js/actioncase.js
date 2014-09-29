var tabCase;



var sizeCase = 235;
var canvasGame;

var timerInterval;

var canvasWidth;
var canvasHeight;

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

    tabCase = [ { caseNB:  case0, casePosY : 0,casePosX : 0, boule : false},
    			{ caseNB:  case1, casePosY : 0,casePosX : 0, boule : false},
    			{ caseNB:  case3, casePosY : 0,casePosX : 0, boule : false},
    			{ caseNB:  case4, casePosY : 0,casePosX : 0, boule : false},
    			{ caseNB:  case5, casePosY : 0,casePosX : 0, boule : false},
    			{ caseNB:  case6, casePosY : 0,casePosX : 0, boule : false},
    			{ caseNB:  case7, casePosY : 0,casePosX : 0, boule : false},
    			{ caseNB:  case8, casePosY : 0,casePosX : 0, boule : false},
    			{ caseNB:  case9, casePosY : 0,casePosX : 0, boule : false}];

    var Y = 20, X= 20;
    
    var caseX = 20;
    var caseY = 20;
    var k= 0;

    //boucle de mise en place des case
    for (var i = 0; i <tabCase.length/3; i++) {
        for (var j = 0 ; j< tabCase.length/3; j ++) {
            
            drawCase(tabCase[k].caseNB, X, Y, sizeCase, "#3498db");
            tabCase[k].casePosX = X;
            X += sizeCase + 20;

            tabCase[k].casePosY = Y;

            console.log(k);
            tabCase[k].caseNB.stroke();
            k++;
        };
        X = 20
        Y += sizeCase + 20; 
    };
    
    console.log(tabCase[6]);
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
	
    
    var tabNbRandom = Math.floor((Math.random() * 10));

    
    console.log("tab number :" + tabNbRandom);
    console.log(tabCase[8]);

    colorRandom = changeColorRandom();
	timerInterval = setInterval(function () {moveCase(colorRandom, tabCase[0], tabCase[2])}, 1000/60);

}


function moveHorizontal(){

}

function moveVertical(){

}



function moveCase(color, depart, arriver){
	depart.caseNB.clearRect(0, 0, canvasWidth, canvasHeight);
	depart.caseNB.beginPath();

    drawCase(depart.caseNB, depart.casePosX, depart.casePosY, sizeCase, color);

    //tabCase[0].casePosX --;
    if (depart.casePosX > arriver.casePosX) {
        if(depart.casePosX != arriver.casePosX){
            depart.casePosX --;
            return false;
        }  
        else{
            clearInterval(timerInterval);
            return true;
        }
    }else if(depart.casePosX < arriver.casePosX){
        console.log("dans le if");
        if(depart.casePosX != arriver.casePosX){
            depart.casePosX ++;
            return false;
        }  
        else{
            clearInterval(timerInterval);
            return true;
        }
    }else{
        clearInterval(timerInterval);
        return true;
    }

    

}

function animeCase(){

	var time = new Date();
	tabCase[0].rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
}



