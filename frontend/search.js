// Need IDs here
var searchButton = document.getElementById("");
var clearButton  = document.getElementById("");
var dataPanel    = document.getElementById("");

// I want to grab all of the data first so we dont have to keep sending requests
window.onload = function retrieveData(){
	var xhr = new XMLHttpRequest();
	var url = "http://student05.cse.nd.edu:51087/scores/";
	xhr.open("GET", url, true);
	xhr.onload = function (e){
		return xhr.responseText;
	}
	xhr.onerror = function (e){
		// I want to update the body to say reload the page
	}
}

var response = JSON.parse(retrieveData());

searchButton.onmouseup = filterData;
clearButton.onmouseup  = resetData;

function filterData(){
	var filterType = document.getElementById("filter").value;	
}


