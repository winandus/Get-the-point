function makeGrid(){
        var possible = "ABCDEF0123456789";
        var color="#";

        var c=document.getElementById("getThePoint");
        //var ctx=c.getContext("2d");

        var case0 = c.getContext("2d");
        var case1 = c.getContext("2d");
        var case2 = c.getContext("2d");
        var case3 = c.getContext("2d");
        var case4 = c.getContext("2d");
        var case5 = c.getContext("2d");
        var case6 = c.getContext("2d");
        var case7 = c.getContext("2d");
        var case8 = c.getContext("2d");
        var case9 = c.getContext("2d");

        var tabCase = [case0 , case1, case3 , case4 , case5 , case6 , case7 , case8 ,case9];

        //console.log(tabCase);

        var sizeCase = 235;
        var caseX = 20;
        var caseY = 20;
        for (var i = 0; i <9 ; i++) {
            for (var j = 3 ; j> 0; j --) {
                for (var k = 6 ; k > 0; k--) {
                    color += possible.charAt(Math.floor(Math.random() * possible.length)) ;

                };
                tabCase[i].fillStyle= color;
                tabCase[i].fillRect(caseX,caseY,sizeCase,sizeCase);
                caseX+= sizeCase + 20;
                //console.log(color);
                tabCase[i].stroke();
                color = "#";
            };
            caseX =20;
            caseY += sizeCase + 20;
            
        };


        

        setTimeout(function () {moveCase(tabCase);}, 3000);
        
    }

     function moveCase(caseTab){

            console.log(caseTab);

            caseTab[8].translate(70,70);
            caseTab[7].fillStyle= "#F0F";

        }