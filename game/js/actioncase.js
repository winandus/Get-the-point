
$.fn.getClass = function (){
	var caseTab = document.getElementByClassName('case');
	for (var i = 0; i < caseTab.length; i++) {
	    if (caseTab[i].className == 'case') {
	        console.log(caseTab);
	    };
	}
};