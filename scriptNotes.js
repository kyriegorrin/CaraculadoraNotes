//Aquesta funció bàsicament serà un switch criminalment llarg, però com que no tenim
//API per als mètodes avaluatius i fer scrapping no és viable, és lo que hay. 
//Probablement es podria tirar fent una BD per alguna banda amb els percentatges i 
//càlculs emmagatzemats d'alguna manera, però pel moment es queda així.
function submitAssignatura(){
	var nomAssig = document.getElementById("nom_assignatura").value;

	//numAvaluacions és un array[0..2] que conté el numero d'actes avaluatius de cada tipus
	var numAvaluacions = document.getElementById("nom_assignatura").innerHTML.split(",");
}

function computaNota(){
	//TODO
}