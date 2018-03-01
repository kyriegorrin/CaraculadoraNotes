//Aquesta funció bàsicament serà un switch criminalment llarg, però com que no tenim
//API per als mètodes avaluatius i fer scrapping no és viable, és lo que hay. 
//Probablement es podria tirar fent una BD per alguna banda amb els percentatges i 
//càlculs emmagatzemats d'alguna manera, però pel moment es queda així.
function submitAssignatura(){
	var nomAssig = document.getElementById("nom_assignatura").value;

	//numAvaluacions és un array[0..3] que conté el numero d'actes avaluatius de cada tipus
	var numAvaluacions = document.querySelector("option[value="+nomAssig+"]").innerHTML;
	numAvaluacions = String(numAvaluacions).split(",");

	//Cada variable conté el número d'actes avaluatius de cada tìpus
	var numParcials = numAvaluacions[0];
	var numLabos = numAvaluacions[1];
	var numMisc = numAvaluacions[2];
	var numFinals = numAvaluacions[3];

	//Generar quadres d'input i etiquetes corresponents
	//GENERACIO INPUTS PARCIALS
	for(i = 0; i < numParcials; ++i){
		
	}

	//GENERACIO INPUTS LABOS

	//GENERACIO INPUTS MISC

	//GENERACIO INPUTS FINAL

	//TESTING
	document.getElementById("resultat").innerHTML = numLabos;
}

function computaNota(){
	//TODO
}