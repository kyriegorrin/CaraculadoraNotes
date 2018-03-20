//Aquest arxiu només conté un diccionari de comentaris per a cada assignatura
//si són pertinents. Els comentaris només són necessaris per notificar coses
//com quins criteris s'han triat per a fer calculs d'assignatures o informació
//rellevant, així com avisos o el que creguis convenient.
var dictComentaris = {};

dictComentaris["A"] = "Si la nota del primer parcial és inferior a 3, es computa la nota utilitzant la nota final.<br/>" +	
						"En cas contrari, es computa amb els parcials.";

dictComentaris["AC"] = "La nota auxiliar representa un 10% adicional a la nota final.<br />" +
						"Es calcula en funció dels problemes entregats i la participació."

dictComentaris["ADEI"] = "ADEI és una assignatura amb avaluació molt variable. Només podem posar termes molt generals.<br/>" +
							"[Nota teoria: nota parcial], [Nota presentació: nota auxiliar], [Nota entregues: nota laboratori]";

dictComentaris["APSS"] = "Les notes de les diferents avaluacions que no són l'examen final o parcial van als següents llocs:<br/>" +
							"[Nota participació: nota auxiliar 1], [Nota presentació: nota auxiliar 2], [Nota activitat interacció: nota auxiliar 3]";

dictComentaris["AS"] = "[Nota auxiliar: nota total dels qüestionaris]";

dictComentaris["ASDP"] = "[Nota auxiliar 1: nota participació], [Nota auxiliar 2: nota treballs], [Nota laboratori: nota projecte]";

dictComentaris["ASMI"] = "ASMI no te examens parcials de per sí, totes les seves notes són de treballs i activitats diverses.<br/>" + 
							"Si la nota contínua és inferior a 6, es fa un examen final. Les diferents notes són les següents:<br/>" +
							"[Nota auxiliar 1: treball i exposició en públic]<br/>" + 
							"[Nota auxiliar 2: lectura i recensió de llibres<br/>" +
							"[Nota auxiliar 3: casos d'ètica<br/>" +
							"[Nota auxiliar 4: altres elements avaluatius]<br/>" + 
							"[Nota final: examen final si es fa]";

dictComentaris["ASO"] = "Si la mitja de notes de parcials és superior o igual a 5, es computa la nota total amb aquesta.<br/>"
						"En cas contrari, es computa utilitzant la nota final.";

dictComentaris["ASW"] = "Les diferents notes dels actes avaluatius són les següents: <br/>" +
						"[Nota parcial 1: control teoria 1]<br/>" +
						"[Nota parcial 2: control teoria 2]<br/>" + 
						"[Nota auxiliar 1: nota presentació 1]<br/>" +
						"[Nota auxiliar 2: nota presentació 2]<br/>" +
						"[Nota laboratori 1: nota IntroLab]<br/>" +
						"[Nota laboratori 2: nota projecte]";

dictComentaris["BD"] = "Assumim que la nota de les preguntes d'inici de laboratori és superior a 5.<br/>" +
			"La nota mitjana de problemes entregats es posa a nota auxiliar 1.";

dictComentaris["CASO"] = "[Nota auxiliar 1: nota informes de seguiment]";