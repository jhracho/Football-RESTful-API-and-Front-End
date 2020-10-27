// Need IDs here
var filterButton = document.getElementById("filter-button");
var clearButton  = document.getElementById("clear-button");
var dataPanel    = document.getElementById("answer-label1");

// I want to grab all of the data first so we dont have to keep sending requests
var xhr = new XMLHttpRequest();
var url = "http://student05.cse.nd.edu:51087/scores/";
xhr.open("GET", url, true);
xhr.onload = function (e){
	var response = JSON.parse(xhr.responseText);
}
xhr.onerror = function (e){
	dataPanel.innerHTML("Error loading data, try refreshing the page...")
}

filterButton.onmouseup = filterData(response);
clearButton.onmouseup  = resetData;

function filterData(response){
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
	for (game in result["games"]){
		if game["teams"].include(criteria){

		}
	}
}

function filterSeason(response, criteria){
	var comparison = parseInt(criteria, 10);
	if (comparison < 2010 || comparison > 2020){
		dataPanel.innerHTML("ERROR: Enter a year between 2010-2020");
		return;
	}
	for (game in result["games"]){
	
	}
}

function filterScore(response, criteria){

}

function filterTotalScore(response, criteria){
	var xhr2 = new XMLHttpRequest();
	var url = "http://student05.cse.nd.edu:51087/scores/:" + criteria;
	xhr.open("GET", url, true);
	xhr.onload = function (e){
		var response = JSON.parse(xhr.responseText);
	}
	xhr.onerror = function (e){
		dataPanel.innerHTML("Game ID does not exist...");
	}
// Populate the shit yo

}

function filterID(response, criteria){
	
}

function resetData(){

}


