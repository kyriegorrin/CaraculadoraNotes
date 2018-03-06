//Creació contenidors pertinents de notes
var inputParcials = [];
var inputLabos = [];
var inputMisc = [];
var inputFinals = [];

//Aquesta funció bàsicament serà un switch criminalment llarg, però com que no tenim
//API per als mètodes avaluatius i fer scrapping no és viable, és lo que hay. 
//Probablement es podria tirar fent una BD per alguna banda amb els percentatges i 
//càlculs emmagatzemats d'alguna manera, però pel moment es queda així.
function submitAssignatura(){
	//Abans que res, netejem el contingut dels divs i els inputs (per si s'ha executat el script abans)
	clearDivsAndContainers();

	//Posem el botó de calcular visible
	document.getElementById("computeButton").removeAttribute("hidden");

	//Agafem el nom de l'assignatura seleccionada
	var nomAssig = document.getElementById("nom_assignatura").value;

	//numAvaluacions és un array[0..3] que conté el numero d'actes avaluatius de cada tipus
	var numAvaluacions = document.querySelector("option[value="+nomAssig+"]").innerHTML;
	numAvaluacions = String(numAvaluacions).split(",");

	//Cada variable conté el número d'actes avaluatius de cada tipus
	var numParcials = numAvaluacions[0];
	var numLabos = numAvaluacions[1];
	var numMisc = numAvaluacions[2];
	var numFinals = numAvaluacions[3];

	//Aconseguim referencies dels divs destinació
	var divParcials = document.getElementById("div_parcials");
	var divLabos = document.getElementById("div_labos");
	var divMisc = document.getElementById("div_misc");
	var divFinals = document.getElementById("div_finals");

	//Generar quadres d'input i etiquetes corresponents
	//GENERACIO INPUTS PARCIALS
	for(i = 0; i < numParcials; ++i){
		//Creem label indicativa
		var label = document.createElement("label");
		label.innerHTML = "Parcial " + (i + 1);

		//Creem input amb atributs corresponents
		inputParcials.push(document.createElement("input"));
		inputParcials[i].setAttribute("type", "number");
		inputParcials[i].setAttribute("max", "10");
		inputParcials[i].setAttribute("min", "0");
		inputParcials[i].setAttribute("placeholder", "Inserta una nota");

		//Afegim input i label al div corresponent
		divParcials.appendChild(label);
		divParcials.appendChild(inputParcials[i]);
	}

	//GENERACIO INPUTS LABOS
	for(i = 0; i < numLabos; ++i){
		//Creem label indicativa
		var label = document.createElement("label");
		label.innerHTML = "Nota laboratori " + (i + 1);
		
		//Creem input amb atributs corresponents
		inputLabos.push(document.createElement("input"));
		inputLabos[i].setAttribute("type", "number");
		inputLabos[i].setAttribute("max", "10");
		inputLabos[i].setAttribute("min", "0");
		inputLabos[i].setAttribute("placeholder", "Inserta una nota");

		//Afegim input i label al div corresponent
		divLabos.appendChild(label);
		divLabos.appendChild(inputLabos[i]);
	}

	//GENERACIO INPUTS MISC
	for(i = 0; i < numMisc; ++i){
		//Creem label indicativa
		var label = document.createElement("label");
		label.innerHTML = "Nota auxiliar " + (i + 1);
		
		//Creem input amb atributs corresponents
		inputMisc.push(document.createElement("input"));
		inputMisc[i].setAttribute("type", "number");
		inputMisc[i].setAttribute("max", "10");
		inputMisc[i].setAttribute("min", "0");
		inputMisc[i].setAttribute("placeholder", "Inserta una nota");

		//Afegim input i label al div corresponent
		divMisc.appendChild(label);
		divMisc.appendChild(inputMisc[i]);
	}

	//GENERACIO INPUTS FINAL
	for(i = 0; i < numFinals; ++i){
		//Creem label indicativa
		var label = document.createElement("label");
		label.innerHTML = "Final " + (i + 1);
		
		//Creem input amb atributs corresponents
		inputFinals.push(document.createElement("input"));
		inputFinals[i].setAttribute("type", "number");
		inputFinals[i].setAttribute("max", "10");
		inputFinals[i].setAttribute("min", "0");
		inputFinals[i].setAttribute("placeholder", "Inserta una nota");

		//Afegim input i label al div corresponent
		divFinals.appendChild(label);
		divFinals.appendChild(inputFinals[i]);
	}

	//TESTING
	document.getElementById("resultat").innerHTML = numLabos;
}

//Funció que neteja el contingut dels divs contenidors dels inputs i els
//arrays globals que contenen les notes.
function clearDivsAndContainers(){
	var divParcials = document.getElementById("div_parcials");
	var divLabos = document.getElementById("div_labos");
	var divMisc = document.getElementById("div_misc");
	var divFinals = document.getElementById("div_finals");

	//L'array és per fer menys codi després quan apliquem el tractament a tots els divs
	var arrayDivs = [divParcials, divLabos, divMisc, divFinals];

	//Netejem tots els divs
	for(i = 0; i < arrayDivs.length; i++){
		while(arrayDivs[i].firstChild){
			arrayDivs[i].removeChild(arrayDivs[i].firstChild);
		}
	}

	//Fem clear de la nota calculada
	document.getElementById("div_nota").innerHTML = "";

	//Clear dels arrays
	inputParcials = [];
	inputLabos = [];
	inputMisc = [];
	inputFinals = [];
}

//La funció agafa els inputs dels vectors d'elements passats per paràmetre i computa la nota depenent de l'assignatura.
//En realitat és un switch glorificat putament llarg.
function computaNota(){
	//Assignatura que tractem
	var assignatura = document.getElementById("nom_assignatura").value;

	//Nota calculada
	var nota;

	switch(assignatura){
		//Algorismia
		case "A":
	}

	//DEBUGGING DE VARIABLES GLOBALS
	console.log(inputParcials.length);
}

