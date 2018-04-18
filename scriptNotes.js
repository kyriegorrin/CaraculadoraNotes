//Creació contenidors globals pertinents dels elements HTML dels inputs de les notes
var inputParcials = [];
var inputLabos = [];
var inputMisc = [];
var inputFinals = [];

//Creació de contenidors de floats de les notes que contenen els inputs anteriors
var notesParcials = [];
var notesLabos = [];
var notesMisc = [];
var notesFinals = [];

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

	//Mostrem comentaris que creiem convenients de l'assignatura
	if(dictComentaris[nomAssig] != undefined)
		document.getElementById("div_comentaris").innerHTML = dictComentaris[nomAssig];

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
//arrays globals que contenen les notes. És un clear general.
function clearDivsAndContainers(){
	var divParcials = document.getElementById("div_parcials");
	var divLabos = document.getElementById("div_labos");
	var divMisc = document.getElementById("div_misc");
	var divFinals = document.getElementById("div_finals");

	//L'array és per fer menys codi després quan apliquem el tractament a tots els divs de inputs
	var arrayDivs = [divParcials, divLabos, divMisc, divFinals];

	//Netejem tots els divs d'inputs
	for(i = 0; i < arrayDivs.length; i++){
		while(arrayDivs[i].firstChild){
			arrayDivs[i].removeChild(arrayDivs[i].firstChild);
		}
	}

	//Fem clear de la nota calculada i els comentaris associats
	document.getElementById("div_nota").innerHTML = "";
	document.getElementById("div_comentaris").innerHTML = "";

	//Clear dels arrays d'elements i notes
	inputParcials = [];
	inputLabos = [];
	inputMisc = [];
	inputFinals = [];

	notesParcials = [];
	notesLabos = [];
	notesMisc = [];
	notesFinals = [];	
}

//Funció que agafa els vectors dels valors de les notes i els neteja
//Necessari per a recomputar les notes i que no passin marrons raros.
function clearNotes(){
	notesParcials = [];
	notesLabos = [];
	notesMisc = [];
	notesFinals = [];
}

//Aquesta funció tracta els arrays globals de inputs i exporta els seus valors 
//numèrics als arrays globals de notes. Fem cast a float.
function exportToNumbers(){
	for(i = 0; i < inputParcials.length; ++i){
		notesParcials.push(parseFloat(inputParcials[i].value));
	}
	for(i = 0; i < inputLabos.length; ++i){
		notesLabos.push(parseFloat(inputLabos[i].value));
	}
	for(i = 0; i < inputMisc.length; ++i){
		notesMisc.push(parseFloat(inputMisc[i].value));
	}
	for(i = 0; i < inputFinals.length; ++i){
		notesFinals.push(parseFloat(inputFinals[i].value));
	}
}

//La funció agafa els inputs dels vectors d'elements passats per paràmetre i computa la nota depenent de l'assignatura.
//En realitat és un switch glorificat putament llarg. És on vindràs a canviar el càlcul de notes si escau.
function computaNota(){
	//Assignatura que tractem
	var assignatura = document.getElementById("nom_assignatura").value;

	//Nota calculada
	var nota;

	//Exportem els continguts dels inputs als arrays de notes en floats
	exportToNumbers();

	//Calculs de les notes per cada assignatura. Pilla unes quantes birres que va per llarg.
	switch(assignatura){
		//Algorismia
		case "A":
			if(notesParcials[0] >= 3.0){//Assumim que va per continua
				nota = 0.7*(0.5*notesParcials[0] + 0.5*notesParcials[1]) +
						0.1*notesMisc[0] + 0.2*notesLabos[0];
			}
			else{//Va per examen final
				nota = 0.7*notesFinals[0] + 0.1*notesMisc[0] + 0.2*notesLabos[0];
			}
			break;

		//Ampliació d'Algorismia	
		case "AA":
			nota = 0.3*notesMisc[0] + 0.7*notesFinals[0];
			break;

		//Administració de Bases de Dades
		case "ABD":
			nota = 0.4*notesLabos[0] + 0.4*notesFinals[0] + 0.2*notesMisc[0];
			break;

		//Arquitectura de Computadors
		case "AC":
			nota = 0.15*notesParcials[0] + 0.25*notesParcials[1] + 0.4*notesParcials[2] +
					0.2*notesLabos[0] + 0.1*notesMisc[0];
			break;

		//Arquitectura de Computadors 2
		case "AC2":
			nota = 0.2*notesLabos[0] + Math.max(0.8*notesFinals[0], 0.65*notesFinals[0] + 0.15*notesParcials[0]);
			break;

		//Anàlisi de Dades i Explotació de la Informació
		case "ADEI":
			nota = 0.4*notesMisc[0] + 0.3*notesParcials[0] + 0.3*notesLabos[0];
			break;

		//Habilitats Acadèmiques i Professionals d'Expressió Oral en Anglès
		case "APSS":
			nota = Math.max(0.25*notesParcials[0] + 0.05*notesMisc[0], 0.2*notesParcials[0] + 0.1*notesMisc[0]) +
					0.25*notesMisc[1] + 0.20*notesMisc[2] + 0.25*notesFinals[0];
			break;

		//Arquitectura del Software
		case "AS":
			nota = 0.3*notesParcials[0] + 0.3*notesParcials[1] + 0.3*notesParcials[2] + 0.1*notesMisc[0];
			break;

		//Habilitats Acadèmiques Pel Desenvolupament de Projectes en Anglès
		case "ASDP":
			nota = Math.max(0.25*notesParcials[0] + 0.05*notesMisc[0], 0.2*notesParcials[0] + 0.1*notesMisc[0]) +
					0.25*notesParcials[1] + 0.25*notesLabos[0] + 0.20*notesMisc[1];
			break;

		//Aspectes Socials i Mediambientals de la Informàtica
		case "ASMI":
			nota = 0.35*notesMisc[0] + 0.20*notesMisc[1] + 0.20*notesMisc[2] + 0.25*notesMisc[3];
			if(nota < 6){
				nota = 0.5*nota + 0.5*notesFinals[0];
			}
			break;

		//Administració de sistemes operatius
		case "ASO":			
			nota = Math.max((0.25*notesParcials[0] + 0.25*notesParcials[1] + 0.5*notesParcials[2]), notesFinals[0])*0.4 +
				0.5*notesLabos[0] + 0.1*notesMisc[0];		
			break;

		//Aplicacions i Serveis Web
		case "ASW":
			nota = 0.5*(0.3*notesParcials[0] + 0.3*notesParcials[1] + 0.2*notesMisc[0] + 0.2*notesMisc[1]) +
					0.5*(0.35*notesLabos[0] + 0.65*notesLabos[1]);
			break;
		
		//Bases de Dades
		case "BD":
			var notaLab = 0.4*notesLabos[0] + 0.3*notesLabos[1] + 0.3*notesLabos[2];
			nota = Math.max(0.15*notesMisc[0] + 0.25*notaLab + 0.60*notesFinals[0], 0.25*notaLab + 0.75*notesFinals[0]);
			break;
		
		//Conceptes Avançats de Sistemes Operatius
		case "CASO":
			nota = 0.4*(Math.max(0.25*notesParcials[0] + 0.25*notesParcials[1] + 0.5*notesParcials[2], notesFinals[0])) +
				0.5*notesLabos[0] + 0.1*notesMisc[0];
			break;

		//Conceptes per a Bases de Dades Especialitzades
		case "CBDE": 
			nota = 0.7*(Math.min(10, notesLabos[0])) + 0.2*notesParcials[0] + 0.1*notesMisc[0];
			break;

		//Compressió de Dadess i Imatges
		case "CDI":
			nota = 0.3*notesParcials[0] + 0.3*notesParcials[1] + 0.4*notesLabos[0];
			break;

		//Interficies de Computadors
		case "CI":
			nota = 0.7*notesParcials[0] + 0.3*notesLabos[0];
			break;

		//Compiladors
		case "CL":
			nota = 0.25*notesLabos[0] + 0.3*notesLabo[1] + 0.45*notesParcials[0];
			break;

		//Computació Numèrica
		case "CN":
			nota = 0.2*notesParcials[0] + 0.2*notesMisc[0] + 0.2*notesLabos[0] + 0.4*notesFinals[0];
			break;

		//Disseny de Bases de Dades
		case "DBD":
			nota = 0.7*Math.min(10, notesLabos[0]) + 0.2*notesFinals[0] + 0.1*notesMisc[0];
			break;

		//Disseny de Sistemes Basats en Microcontroladors
		case "DSBM":
			nota = 0.1*notesParcials[0] + 0.1*notesParcials[1] + 0.1*notesParcials[2] + 0.1*notesParcials[3] +
					0.4*notesLabos[0] + 0.2*notesFinals[0];
			break;

		//Disseny de Sistemes d'Informació
		case "DSI":
			nota = 0.35*notesLabos[0] + 0.25*notesLabos[1] + 0.30*notesLabos[2] + 0.10*notesMisc[0];
			break;

		//Estructura de Computadors
		case "EC":
			nota = Math.max(0.2*notesParcials[0] + 0.6*notesFinals[0], 0.8*notesFinals[0]) + 
					0.2*(0.15*notesLabos[0] + 0.85*notesLabos[1]);
			break;

		//Enginyeria del Coneixement i Sistemes Distribuits Inteligents (ostia puta)
		case "ECSDI":
			nota = Math.max(0.2*notesParcials[0] + 0.4*notesFinals[0], 0.6*notesFinals[0]) + 0.4*notesLabos[0];
			break;

		//Estructures de Dades Avançades
		case "EDA":
			nota = Math.min(10, Math.max(0.3*notesParcials[0] + 0.3*notesLabos[0] + 0.3*notesFinals[0] + 0.2*notesMisc[0],
					0.3*notesLabos[0] + 0.6*notesFinals[0] + 0.2*notesMisc[0]));
			break;

		//Empresa i Entorn Econòmic
		case "EEE":
			nota = 0;
			for(i = 0; i < 6; ++i){
				nota += 0.15*notesParcials[0];
			}
			nota += 1;//Assumim que tens el punt de participació
			break;

		//Enginyeria de Requisits
		case "ER":
			nota = 0.25*notesParcials[0] + 0.25*notesMisc[0] + 0.5*notesLabos[0];
			break;

		//Física
		case "F":
			nota = 0.1*notesLabos[0] + 0.9*Math.max(0.25*notesParcials[0] + 0.25*notesParcials[1] + 0.25*notesParcials[2] + 0.25*notesParcials[3], notesFinals[0]);
			break;

		//Física dels Dispositius de Memòria
		case "FDM":
			//TODO
			break;

		//Fonaments Matemàtics
		case "FM":
			nota = 0.2*notesParcials[0] + 0.2*notesParcials[1] + 0.2*notesMisc[0] + 0.4*notesFinals[0];
			break;

		//Fisica Orientada a Animacrió Realista
		case "FOMAR":
			nota = 0.5*Math.max(0.25*notesParcials[0]+0.75*notesFinals[0], notesFinals[0]) + 0.5*notesLabos[0];
			break;

		//Gràfics
		case "G":
			nota = 0.25*notesLabos[0] + 0.25*notesLabos[1] + 0.5*notesFinals[0];
			break;

		//Gestió de Projectes de Software
		case "GPS":
			nota = 0.4*notesLabos[0] + 0.4*notesLabos[1] + 0.1*notesMisc[0] + 0.1*notesFinals[0];
			break;

		//Inteligència Artificial
		case "IA":			
			nota =  Math.max(0.2*notesParcials[0] + 0.4*notesFinals[0], 0.6*notesFinals[0]) + 0.35*notesLabos[0] + 0.05*notesMisc[0];
			break;

		//Introducció als Computadors
		case "IC":
			var notaTeoriaCont = 0.05*notesParcials[0] + 0.3*notesParcials[1] + 0.25*notesParcials[2] + 0.40*notesParcials[3];
			var notaLaboratori = 0;
			
			for(i = 0; i < 6; i++){ 
				notaLaboratori +=  notesLabos[i];
			} notaLaboratori /= 6;

			nota = 0.8*Math.max(notaTeoriaCont, notesFinals[0]) + 0.2*notaLaboratori;
			break;

		//Interacció i Disseny d'Interfícies
		case "IDI": //En aquest cas el que vols fer és suicidar-te
			nota = 0.25*notesParcials[0] + 0.50*notesParcials[1] + 0.25*notesLabos[0];
			break;

		//Introudcció a l'Enginyeria del Software
		case "IES":
			nota = 0.25*notesParcials[0] + 0.15*notesParcials[1] + 0.25*notesParcials[2] + 0.1*notesLabos[0] + 0.15*notesLabos[1] + 0.1*notesMisc[0];
			break;

		//Internet Mòbil
		case "IM":
			nota = 0.8*Math.max(0.25*notesParcials[0] + 0.75*notesFinals[0], notesFinals[0]) + 0.2*notesLabos[0];
			break;

		//Lògica a la Informàtica
		case "LI":
			nota = 0.6*notesFinals[0] + 0.4*notesLabos[0];
			break;

		//Matemàtiques 1
		case "M1":
			nota = 0.2*notesLabos[0] + 0.35*Math.max(notesParcials[0], notesFinals[0]) + 0.45*notesFinals[1];
			break;

		//Matemàtiques 2
		case "M2":
			nota = Math.max(0.4*notesParcials[0] + 0.4*notesParcials[1], 0.8*notesFinals[0]) + 0.2*notesLabos[0]; 
			break;

		//Màrqueting a Internet
		case "MI":
			nota = 0.4*notesMisc[0] + 0.6*notesLabos[0];
			break;

		//Multiprocessadors
		case "MP":
			nota = Math.max(0.8*notesFinals[0], 0.15*notesParcials[0] + 0.65*notesFinals[0]) + 0.2*notesLabos[0];
			break;

		//Negoci Electrònic
		case "NE":
			nota = 0.2*notesMisc[0] + 0.125*notesLabos[0] + 0.125*notesLabos[1] + 0.3*notesLabos[2] + 0.25*notesFinals[0];
			break;

		//Projecte Aplicat d'Enginyeria
		case "PAE":
			nota = 0.25*notesLabos[0] + 0.25*notesLabos[1] + 0.5*notesFinals[0];
			break;

		//Programació i Arquitectures Paral·leles
		case "PAP":
			nota = 0.5*(0.6*notesParcials[0] + 0.4*notesParcials[1]) + 0.3*notesLabos[0] + 0.2*notesMisc[0];
			break;

		//Paral·lelisme
		case "PAR":
			nota = 0.7*(0.6*notesParcials[0] + 0.4*notesParcials[1]) + 0.3*notesLabos[0];
			break;

		//Programació Conscient de l'Arquitectura
		case "PCA":
			var notaControls = 0.35*notesParcials[0] + 0.65*notesParcials[1];
			var notaLaboratori = 0;
			for(i = 0; i < 5; i++){
				notaLaboratori += 0.2*notesLabos[i];
			}
			var notaChallenge = 0;
			var notaExamens;
			if(notaControls >= 5) {
				notaChallenge = notesMisc[1];
				notaExamens = Math.max(notaControls, notesFinals[0]);
			}
			else notaExamens = Math.max(0.25*notaControls + 0.75*notesFinals[0], notesFinals[0]);
					
			nota = Math.min(0.5*notaExamens + 0.1*notesMisc[0] + 0.4*notaLaboratori + 0.1*notaChallenge, 10);
			break;

		//Probabilitat i Estadística
		case "PE":
			break;
		
		//Projecte d'Enginyeria de Computadors
		case "PEC":
			break;

		//Projecte d'Enginyeria del Software
		case "PES":
			break;

		//Protocols d'Internet
		case "PI":
			nota = 0.2*(0.25*notesLabos[0] + 0.75*notesLabos[1]) + 0.1*notesParcials[0] + 0.1*notesMisc[0] + 0.6*notesFinals[0];	
			break;

		//Programació 1
		case "PRO1":
			nota = 0.25*notesParcials[0] + 0.3*notesParcials[1] + 0.45*notesParcials[2];
			if(nota < 5) 
				nota = Math.max(notesFinals[0], (notesFinals[0] + nota) / 2);
			break;

		//Programació 2
		case "PRO2":
			nota = 0.25*notesParcials[0] + 0.25*notesParcials[1] + 0.1*notesLabos[0] + 0.25*notesLabos[1] + 0.15*notesLabos[2];
			break;

		//Projecte de Programació 
		case "PROP":
			nota = 0.2*notesParcials[0] + 0.8*(0.4*notesLabos[0] + 0.6*notesLabos[1]);
			break;

		//Projecte de Sistemes d'Informació
		case "PSI":
			break;

		//Projecte de Tecnologies de la Informació	
		case "PTI":
			nota = 0.25*notesLabos[0] + 0.6*notesLabos[1] + 0.15*notesMisc[0];
			break;

		//Best Optativa (busca a Youtube)
		case "ROB":
			var notaParticipacio = notesMisc[1];
			if(notaParticipacio > 3) notaParticipacio = 3;
			nota = Math.min(10, 0.3*notesMisc[0] + 0.4*notesParcials[0] + 0.3*(notesLabos[0] + notaParticipacio));
			break;

		//Sistemes Distribuits en Xarxa
		case "SDX":
			nota = 0.3*notesParcials[0] + 0.3*notesFinals[0] + 0.15*notesMisc[0] + 0.25*notesLabos[0];
			break;

		//Seguretat Informàtica
		case "SI":
			nota = 0.7*((notesParcials[0] + notesParcials[1] + notesParcials[2])/3) + 0.25*(0.5*notesLabos[0] + 0.5*notesLabos[1]) + 0.05*notesMisc[0];
			break;

		//Sistemes Intel·ligents Distribuits
		case "SID":
			nota = 0.5*((notesParcials[0] + notesFinals[0])/2) + 0.2*notesMisc[0] + 0.3*notesLabos[0];
			break;

		//Simulació
		case "SIM":
			nota = 0.3*notesLabos[0] + 0.5*notesLabos[1] + 0.2*notesFinals[0];
			break;

		//Sistemes d'Informació per a les Organitzacions
		case "SIO":
			var nac = 0;

			for(i = 0; i < 5; i++){
				nac += 0.2*notesParcials[i];
			}
			nota = 0.3*nac + 0.3*notesMisc[0] + 0.3*notesLabos[0] + 0.1*notesMisc[1];
			break;

		//Software Lliure i Desenvolupament Social
		case "SLDS":
			nota = 0.15*notesParcials[0] + 0.3*notesLabos[0] + 0.2*notesLabos[1] + 0.15*notesLabos[2] + 0.2*notesMisc[0]; 
			break;

		//Sistemes Operatius
		case "SO":
			nota = 0.5*(0.4*notesParcials[0] + 0.6*notesParcials[1]) + 0.5*(0.45*notesLabos[0] + 0.45*notesLabos[1] + 0.1*notesLabos[2]);
			if(nota < 5) nota = 0.5*notesFinals[0] + 0.5*notesFinals[1];
			break;

		//Sistemes Operatius 2
		case "SO2":
			var notaT = 0.5*notesParcials[0] + 0.5*notesParcials[1];
			var notaL = 0.35*notesLabos[0] + 0.35*notesLabos[1] + 0.30*notesLabos[2];
			nota = (Math.max(0.5*notaT + 0.5*notaL, 0.5*notesFinals[0] + 0.5*notesFinals[1]) + notesMisc[0]) * (10.0/11.0);
			break;
		
		//Sistemes Operatius 2 per a TI 
		case "SOA":
			var notaT = 0.5*notesParcials[0] + 0.5*notesParcials[1];
			var notaL = 0.35*notesLabos[0] + 0.35*notesLabos[1] + 0.30*notesLabos[2];
			nota = (Math.max(0.5*notaT + 0.5*notaL, 0.5*notesFinals[0] + 0.5*notesFinals[1]) + notesMisc[0]) * (10.0/11.0);
			break;

		//Sistemes en Temps Real
		case "STR":
			nota = 0.25*notesParcials[0] + 0.25*notesParcials[1] + 0.5*notesLabos[0];
			break;

		//Teoria de la Computació
		case "TC":
			nota = 0.8*((notesParcials[0] + notesParcials[1] + notesParcials[2])/3)+0.2*(notesMisc[0]);
			if(nota < 5){
				nota = Math.max(notesFinals[0], 0.5*notesFinals[0] + 
					0.5*(0.8*((notesParcials[0] + notesParcials[1] + notesParcials[2])/3)+0.2*(notesMisc[0])));
			}
			break;
		
		//Targetes Gràfiques i Acceleradors
		case "TGA":
			nota = 0.5*notesFinals[0] + 0.5*notesLabos[0];
			break;

		//Tecnologies de Xarxes de Computadors
		case "TXC":
			nota = 0.1*notesMisc[0] + 0.1*notesMisc[1] + 0.65*(0.5*notesParcials[0] + 0.5*notesParcials[1]) + 0.15*notesMisc[2];
			break;

		//Visió per Computadors
		case "VC":
			nota = 0.7*notesLabos[0] + 0.3*notesMisc[0];
			break;

		//Videojocs
		case "VJ":
			nota = 0.2*notesLabos[0] + 0.5*notesLabos[1] + 0.3*notesFinals[0];
			break;

		//Habilitats d'Expressió Escrita en Anglès per a l'Enginyeria
		case "WSE":
			var notaT = Math.max(0.30*notesParcials[0] + 0.25*notesParcials[1], 0.25*notesParcials[0] + 0.3*notesParcials[1]);
			nota = notaT + 0.20*notesLabos[0] + 0.20*notesLabos[1] + 0.05*notesMisc[0];
			break;
		
		//Xarxes de Computadors
		case "XC":
			nota = 0.75*(Math.max(notesFinals[0], 0.4*notesParcials[0] + 0.4*notesParcials[1] + 0.2*notesParcials[2])) +
				0.25*(0.25*notesLabos[0] + 0.75*notesLabos[1]);
			break;

		//Xarxes de Computadors 2
		case "XC2":
			nota = 0.6*(0.25*notesParcials[0] + 0.25*notesParcials[1] + 0.5*notesFinals[0]) + 
				0.25*(0.5*notesLabos[0] + 0.5*notesLabos[1]) + 0.15*notesMisc[0];
			break;
	}

	//Fem un clear dels contenidors dels valors de les notes (per si tornem a recomputar-les)
	clearNotes();

	//Mostrem nota
	document.getElementById("div_nota").innerHTML = nota.toFixed(2);	

	//DEBUGGING DE VARIABLES GLOBALS
	console.log(inputParcials.length);
}

