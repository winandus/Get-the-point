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

            tabCase[k].caseNB.stroke();
            k++;
        };
        X = 20
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
	
    
    var tabNbRandom ;
    var tabNbRandom2 ;
    var tabUsedRandom;
    
    

    //for (var i = 0; i < tabCase.length-1; i++) {
        
        //for (var i = 0; i < 9; i++) {
            tabNbRandom = Math.floor((Math.random() *8));
            tabNbRandom2 = Math.floor((Math.random() *8));
        //};
        


        console.log(tabNbRandom);
        colorRandom = changeColorRandom();


        console.log(tabCase[2]);
        console.log(tabCase[tabNbRandom]);
        timerInterval = setInterval(function () {




        moveHorizontal(colorRandom, tabCase[tabNbRandom2], tabCase[tabNbRandom]);



    }, 0,01);
    //};
    

}


function moveHorizontal(color, depart, arriver){

    
    depart.caseNB.clearRect(0, 0, canvasWidth, canvasHeight);
    depart.caseNB.beginPath();

    drawCase(depart.caseNB, depart.casePosX, depart.casePosY, sizeCase, color);

    if (depart.casePosX > arriver.casePosX) {
        if(depart.casePosX != arriver.casePosX){
            depart.casePosX --;
        }  
    }else if(depart.casePosX < arriver.casePosX){
        
        if(depart.casePosX != arriver.casePosX){
            depart.casePosX ++;
        }  

    }else{
        if (depart.casePosY > arriver.casePosY) {
            if(depart.casePosY != arriver.casePosY){
                depart.casePosY --;
            }  
            else{
                clearInterval(timerInterval);
            }
        }else if(depart.casePosY < arriver.casePosY){
            
            if(depart.casePosY != arriver.casePosY){
                depart.casePosY++;
            }  
            else{
                clearInterval(timerInterval);

            }
        }else{
            clearInterval(timerInterval);

        }

    }
}

function animeCase(){

	var time = new Date();
	tabCase[0].rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
}



