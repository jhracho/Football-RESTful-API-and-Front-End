// Need IDs here
var filterButton = document.getElementById("filter-button");
var clearButton = document.getElementById("clear-button");

filterButton.onmouseup = filterData;
clearButton.onmouseup = resetData;

function getFormInfo() {
	clearTable();
	buildTable();
	var filter = document.getElementById("select-filter-type").value;

	switch (filter) {
		case 'team':
			filterTeam();
			break;
		case 'season':
			filterSeason();
			break;
		case 'score':
			filterScore();
			break;
		case 'points':
			filterPoints();
			break;
		case 'id':
			filterID();
			break;
	}
}

function resetData() {
	var filter = document.getElementById("filter-criteria");
	filter.value = "";
	var label = document.getElementById("p1");
	label.innerHTML = "";
	clearTable();
}

function clearTable() {
	var table = document.getElementById("data-table");
	if (typeof (table) != 'undefined' && table != null) {
		table.remove();
	}
}

function buildTable() {
	// get table container
	var container = document.getElementById("table-container");

	// create table
	var table = document.createElement("table");
	table.setAttribute("id", "data-table");
	table.setAttribute("class", "table table-striped table-bordered");

	// create table caption
	var caption = document.createElement("caption");
	var captionText = document.createTextNode("Filtered Data:");
	caption.appendChild(captionText);

	// create table header row
	var tableHead = document.createElement("thead");
	var tableHeadRow = document.createElement("tr");
	tableHead.appendChild(tableHeadRow);
	var IDHead = document.createElement("th");
	IDHead.setAttribute("style", "width: 10%");
	var IDHeadText = document.createTextNode("Game ID");
	IDHead.appendChild(IDHeadText);
	var DateHead = document.createElement("th");
	DateHead.setAttribute("style", "width: 25%");
	var DateHeadText = document.createTextNode("Date");
	DateHead.appendChild(DateHeadText);
	var WinHead = document.createElement("th");
	WinHead.setAttribute("style", "width: 25%");
	var WinHeadText = document.createTextNode("Winning Team");
	WinHead.appendChild(WinHeadText);
	var LoseHead = document.createElement("th");
	LoseHead.setAttribute("style", "width: 25%");
	var LoseHeadText = document.createTextNode("Losing Team");
	LoseHead.appendChild(LoseHeadText);
	var ScoreHead = document.createElement("th");
	ScoreHead.setAttribute("style", "width: 15%");
	var ScoreHeadText = document.createTextNode("Score");
	ScoreHead.appendChild(ScoreHeadText);
	tableHeadRow.appendChild(IDHead);
	tableHeadRow.appendChild(DateHead);
	tableHeadRow.appendChild(WinHead);
	tableHeadRow.appendChild(LoseHead);
	tableHeadRow.appendChild(ScoreHead);
	tableHead.appendChild(tableHeadRow);

	// put together table
	table.appendChild(caption);
	table.appendChild(tableHead);
	container.appendChild(table);
}







function filterData() {
	clearTable();
	buildTable();
	var dataPanel = document.getElementById("answer-label");
	var xhr = new XMLHttpRequest();
	var url = "http://student04.cse.nd.edu:51087/scores/";
	xhr.open("GET", url, true);
	xhr.onload = function (e) {
		filterResponse(JSON.parse(xhr.responseText));
	}
	xhr.onerror = function (e) {
		dataPanel.innerHTML = "Error loading data, try refreshing the page...";
	}
	xhr.send();
}

function filterResponse(response) {
	var filterType = document.getElementById("select-filter-type").value;
	var filterCrit = document.getElementById("filter-criteria").value;

	if (filterType == "team") {
		filterTeam(response, filterCrit);
	}
	else if (filterType == "season") {
		filterSeason(response, filterCrit);
	}
	else if (filterType == "score") {
		filterScore(response, filterCrit);
	}
	else if (filterType == "points") {
		filterTotalScore(response, filterCrit);
	}
	else if (filterType == "id") {
		filterID(response, filterCrit);
	}
}

function filterTeam(response, criteria) {
	var tableBody = document.createElement("tbody");
	var table = document.getElementById("data-table");
	table.appendChild(tableBody);
	var found = false;
	for (i = 0; i < response["games"].length; i++) {
		var game = response["games"][i];
		if (game["teams"].search(criteria) != -1) {
			found = true;
			var row = document.createElement("tr");
			var id = document.createElement("td");
			var idText = document.createTextNode(game['id']);
			id.appendChild(idText);
			var date = document.createElement("td");
			var dateText = document.createTextNode(game['date']);
			date.appendChild(dateText);
			var teams = game['teams'].split(" vs. ");
			var win = document.createElement("td");
			var winText = document.createTextNode(teams[0]);
			win.appendChild(winText);
			var lose = document.createElement("td");
			var loseText = document.createTextNode(teams[1]);
			lose.appendChild(loseText);
			var score = document.createElement("td");
			var scoreText = document.createTextNode(game['finalScore']);
			score.appendChild(scoreText);
			row.appendChild(id);
			row.appendChild(date);
			row.appendChild(win);
			row.appendChild(lose);
			row.appendChild(score);
			tableBody.append(row);
		}
	}
	if (!found) {
		var dataPanel = document.getElementById("answer-label");
		dataPanel.innerHTML = "No games found...";
	}
}

function filterSeason(response, criteria) {
	var tableBody = document.createElement("tbody");
	var table = document.getElementById("data-table");
	table.appendChild(tableBody);
	var found = false;

	for (i = 0; i < response["games"].length; i++) {
		var game = response["games"][i];
		if (game["date"].search(criteria) != -1) {
			found = true;
			var row = document.createElement("tr");
			var id = document.createElement("td");
			var idText = document.createTextNode(game['id']);
			id.appendChild(idText);
			var date = document.createElement("td");
			var dateText = document.createTextNode(game['date']);
			date.appendChild(dateText);
			var teams = game['teams'].split(" vs. ");
			var win = document.createElement("td");
			var winText = document.createTextNode(teams[0]);
			win.appendChild(winText);
			var lose = document.createElement("td");
			var loseText = document.createTextNode(teams[1]);
			lose.appendChild(loseText);
			var score = document.createElement("td");
			var scoreText = document.createTextNode(game['finalScore']);
			score.appendChild(scoreText);
			row.appendChild(id);
			row.appendChild(date);
			row.appendChild(win);
			row.appendChild(lose);
			row.appendChild(score);
			tableBody.append(row);
		}
	}
	if (!found) {
		var dataPanel = document.getElementById("answer-label");
		dataPanel.innerHTML = "No games found...";
	}
}

function filterScore(response, criteria) {
	var found = false;
	var tableBody = document.createElement("tbody");
	var table = document.getElementById("data-table");
	table.appendChild(tableBody);
	for (i = 0; i < response["games"].length; i++) {
		var game = response["games"][i];
		if (game["finalScore"] == criteria) {
			found = true;
			var row = document.createElement("tr");
			var id = document.createElement("td");
			var idText = document.createTextNode(game['id']);
			id.appendChild(idText);
			var date = document.createElement("td");
			var dateText = document.createTextNode(game['date']);
			date.appendChild(dateText);
			var teams = game['teams'].split(" vs. ");
			var win = document.createElement("td");
			var winText = document.createTextNode(teams[0]);
			win.appendChild(winText);
			var lose = document.createElement("td");
			var loseText = document.createTextNode(teams[1]);
			lose.appendChild(loseText);
			var score = document.createElement("td");
			var scoreText = document.createTextNode(game['finalScore']);
			score.appendChild(scoreText);
			row.appendChild(id);
			row.appendChild(date);
			row.appendChild(win);
			row.appendChild(lose);
			row.appendChild(score);
			tableBody.append(row);
		}
	}
	if (!found) {
		var dataPanel = document.getElementById("answer-label");
		dataPanel.innerHTML = "No games found...";
	}
}

function filterTotalScore(response, criteria) {
	var found = false;
	var tableBody = document.createElement("tbody");
	var table = document.getElementById("data-table");
	table.appendChild(tableBody);
	for (i = 0; i < response["games"].length; i++) {
		var game = response["games"][i];
		if (game["totalScore"] == criteria) {
			found = true;
			var row = document.createElement("tr");
			var id = document.createElement("td");
			var idText = document.createTextNode(game['id']);
			id.appendChild(idText);
			var date = document.createElement("td");
			var dateText = document.createTextNode(game['date']);
			date.appendChild(dateText);
			var teams = game['teams'].split(" vs. ");
			var win = document.createElement("td");
			var winText = document.createTextNode(teams[0]);
			win.appendChild(winText);
			var lose = document.createElement("td");
			var loseText = document.createTextNode(teams[1]);
			lose.appendChild(loseText);
			var score = document.createElement("td");
			var scoreText = document.createTextNode(game['finalScore']);
			score.appendChild(scoreText);
			row.appendChild(id);
			row.appendChild(date);
			row.appendChild(win);
			row.appendChild(lose);
			row.appendChild(score);
			tableBody.append(row);
		}
	}
	if (!found) {
		var dataPanel = document.getElementById("answer-label");
		dataPanel.innerHTML = "No games found...";
	}
}

function filterID(response, criteria) {
	var dataPanel = document.getElementById("answer-label");
	var xhr = new XMLHttpRequest();
	var url = "http://student04.cse.nd.edu:51087/scores/" + criteria;
	xhr.open("GET", url, true);
	xhr.onload = function (e) {
		displayFilterID(JSON.parse(xhr.responseText));
	}
	xhr.onerror = function (e) {
		dataPanel.innerHTML = "Error fetching game. ID may not exist.";
	}
	xhr.send();
}

function displayFilterID(response) {
	var tableBody = document.createElement("tbody");
	var table = document.getElementById("data-table");
	table.appendChild(tableBody);
	var game = response["data"];
	var row = document.createElement("tr");
	var id = document.createElement("td");
	var idText = document.createTextNode(game['id']);
	id.appendChild(idText);
	var date = document.createElement("td");
	var dateText = document.createTextNode(game['date']);
	date.appendChild(dateText);
	var teams = game['teams'].split(" vs. ");
	var win = document.createElement("td");
	var winText = document.createTextNode(teams[0]);
	win.appendChild(winText);
	var lose = document.createElement("td");
	var loseText = document.createTextNode(teams[1]);
	lose.appendChild(loseText);
	var score = document.createElement("td");
	var scoreText = document.createTextNode(game['finalScore']);
	score.appendChild(scoreText);
	row.appendChild(id);
	row.appendChild(date);
	row.appendChild(win);
	row.appendChild(lose);
	row.appendChild(score);
	tableBody.append(row);
}


