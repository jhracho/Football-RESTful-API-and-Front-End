// Need IDs here
var filterButton = document.getElementById("filter-button");
var clearButton  = document.getElementById("clear-button");

filterButton.onmouseup = filterData;
clearButton.onmouseup  = resetData;

function filterData(){
	var dataPanel = document.getElementById("answer-label");
	var xhr = new XMLHttpRequest();
	var url = "http://student04.cse.nd.edu:51087/scores/";
	xhr.open("GET", url, true);
	xhr.onload = function (e){
		filterResponse(JSON.parse(xhr.responseText));
	}
	xhr.onerror = function (e){
		dataPanel.innerHTML = "Error loading data, try refreshing the page...";
	}
	xhr.send();
}

function filterResponse(response){
	resetData();
	var dataPanel    = document.getElementById("answer-label");
	var filterType = document.getElementById("select-filter-type").value;
	var filterCrit = document.getElementById("filter-criteria").value;

	if (filterType == "Team"){
		filterTeam(response, filterCrit);
	}
	else if (filterType == "Season"){
		filterSeason(response, filterCrit);
	}
	else if (filterType == "Score"){
		filterScore(response, filterCrit);
	}
	else if (filterType == "Total Points"){
		filterTotalScore(response, filterCrit);
	}
	else if (filterType == "Specific Game ID"){
		filterID(response, filterCrit);
	}
}

function filterTeam(response, criteria){
	var found = false;	
	for (i = 0; i < response["games"].length; i++){
		var tag = document.createElement("p");
		var game = response["games"][i];
		if (game["teams"].search(criteria) != -1){
			found = true;
			var gameDat = "Date: " + game["date"] + " Teams: " + game["teams"] + " Score: " + game["finalScore"]; 
			var text = document.createTextNode(gameDat);
			tag.appendChild(text);
			var element = document.getElementById("answer-label");
			element.appendChild(tag);
		}
	}
	if (!found){
		var dataPanel = document.getElementById("answer-label");	
		dataPanel.innerHTML = "No games found...";
	}
}

function filterSeason(response, criteria){
	var dataPanel = document.getElementById("answer-label");
	var comparison = parseInt(criteria, 10);
	var found = false;
	if (comparison < 2010 || comparison > 2020){
		dataPanel.innerHTML = "ERROR: Enter a year between 2010-2020";
		return;
	}
	for (i = 0; i < response["games"].length; i++){
		found = true;
		var tag = document.createElement("p");
		var game = response["games"][i];
		if (game["date"].search(criteria) != -1){
			var gameDat = "Date: " + game["date"] + " | Teams: " + game["teams"] + " | Score: " + game["finalScore"]; 
			var text = document.createTextNode(gameDat);
			tag.appendChild(text);
			var element = document.getElementById("answer-label");
			element.appendChild(tag);
		}
	}
	if (!found){
		var dataPanel = document.getElementById("answer-label");	
		dataPanel.innerHTML = "No games found...";
	}
}


function filterScore(response, criteria){
	var found = false;
	for (i = 0; i < response["games"].length; i++){
		var tag = document.createElement("p");
		var game = response["games"][i];
		if (game["finalScore"] == criteria){
			found = true;
			var gameDat = "Date: " + game["date"] + " | Teams: " + game["teams"] + " | Score: " + game["finalScore"]; 
			var text = document.createTextNode(gameDat);
			tag.appendChild(text);
			var element = document.getElementById("answer-label");
			element.appendChild(tag);
		}
	}
	if (!found){
		var dataPanel = document.getElementById("answer-label");	
		dataPanel.innerHTML = "No games found...";
	}
}

function filterTotalScore(response, criteria){
	var found = false;
	for (i = 0; i < response["games"].length; i++){
		var tag = document.createElement("p");
		var game = response["games"][i];
		if (game["totalScore"] == criteria){
			found = true;
			var gameDat = "Date: " + game["date"] + " | Teams: " + game["teams"] + " | Score: " + game["finalScore"]; 
			var text = document.createTextNode(gameDat);
			tag.appendChild(text);
			var element = document.getElementById("answer-label");
			element.appendChild(tag);
		}
	}
	if (!found){
		var dataPanel = document.getElementById("answer-label");	
		dataPanel.innerHTML = "No games found...";
	}
}

function filterID(response, criteria){
	var dataPanel = document.getElementById("answer-label");
	var xhr = new XMLHttpRequest();
	var url = "http://student04.cse.nd.edu:51087/scores/" + criteria;
	xhr.open("GET", url, true);
	xhr.onload = function (e){
		displayFilterID(JSON.parse(xhr.responseText));
	}
	xhr.onerror = function (e){
		dataPanel.innerHTML = "Game ID does not exist...";
	}
	xhr.send();	
}

function displayFilterID(response){
	var dataPanel = document.getElementById("answer-label");
	var game = response["data"];
	var gameDat = "Date: " + game["date"] + " | Teams: " + game["teams"] + " | Score: " + game["finalScore"]; 
	console.log(gameDat);
	dataPanel.innerHTML = gameDat;
}

function resetData(){
	var filterCrit = document.getElementById("filter-criteria").value;
	var dataPanel    = document.getElementById("answer-label");
	filterCrit.value = "";
	dataPanel.innerHTML = "";

}


