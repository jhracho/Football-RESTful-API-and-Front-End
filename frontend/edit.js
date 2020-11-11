// edit html depending on add, remove, edit selection
// dynamically update when dropdown is changed
var selectDropdown = document.getElementById("select-operation");
selectDropdown.onchange = function () {
    handleDropdown();
    if (selectDropdown.value != "none") {
        var submitButton = document.getElementById("submit-button");
        submitButton.onmouseup = determineOperation;
    }
}

function handleDropdown() {
    var dropdownValue = document.getElementById("select-operation").value;
    switch (dropdownValue) {
        case "none":
            resetForm();
            break;
        case "add":
            permuteFormAdd();
            break;
        case "remove":
            permuteFormRemove();
            break;
        case "edit":
            permuteFormEdit();
            break;
        case "reset":
            permuteFormReset();
            break;
    }
}

function permuteFormAdd() {
    resetForm();

    // declare container
    var container = document.getElementById("form-container");

    // date label and input
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "dateInput");
    dateLabel.setAttribute("id", "dateLabel");
    var dateLabelText = document.createTextNode("Date");
    dateLabel.appendChild(dateLabelText);

    var dateInput = document.createElement("input");
    dateInput.setAttribute("id", "dateInput");
    dateInput.setAttribute("name", "text-input");
    dateInput.setAttribute("type", "text");
    dateInput.setAttribute("class", "form-control");

    // winning team label and input
    var winningTeamLabel = document.createElement("label");
    winningTeamLabel.setAttribute("for", "winningTeamInput");
    winningTeamLabel.setAttribute("id", "winningTeamLabel");
    var winningTeamLabelText = document.createTextNode("Winning Team Name");
    winningTeamLabel.appendChild(winningTeamLabelText);

    var winningTeamInput = document.createElement("input");
    winningTeamInput.setAttribute("id", "winningTeamInput");
    winningTeamInput.setAttribute("name", "text-input");
    winningTeamInput.setAttribute("type", "text");
    winningTeamInput.setAttribute("class", "form-control");

    // losing team label and input
    var losingTeamLabel = document.createElement("label");
    losingTeamLabel.setAttribute("for", "losingTeamInput");
    losingTeamLabel.setAttribute("id", "losingTeamLabel");
    var losingTeamLabelText = document.createTextNode("Losing Team Name");
    losingTeamLabel.appendChild(losingTeamLabelText);

    var losingTeamInput = document.createElement("input");
    losingTeamInput.setAttribute("id", "losingTeamInput");
    losingTeamInput.setAttribute("name", "text-input");
    losingTeamInput.setAttribute("type", "text");
    losingTeamInput.setAttribute("class", "form-control");

    // score label and input
    var scoreLabel = document.createElement("label");
    scoreLabel.setAttribute("for", "scoreInput");
    scoreLabel.setAttribute("id", "scoreLabel");
    var scoreLabelText = document.createTextNode("Score (xx-xx)");
    scoreLabel.appendChild(scoreLabelText);

    var scoreInput = document.createElement("input");
    scoreInput.setAttribute("id", "scoreInput");
    scoreInput.setAttribute("name", "text-input");
    scoreInput.setAttribute("type", "text");
    scoreInput.setAttribute("class", "form-control");

    // append items to container
    container.appendChild(dateLabel);
    container.appendChild(dateInput);
    container.appendChild(winningTeamLabel);
    container.appendChild(winningTeamInput);
    container.appendChild(losingTeamLabel);
    container.appendChild(losingTeamInput);
    container.appendChild(scoreLabel);
    container.appendChild(scoreInput);

    // add submit button
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "btn btn-primary");
    var submitButtonText = document.createTextNode("Submit");
    submitButton.appendChild(submitButtonText);

    var submitContainer = document.getElementById("submit-container");
    submitContainer.appendChild(submitButton);
}

function permuteFormRemove() {
    resetForm();

    // declare container
    var container = document.getElementById("form-container");

    // game id label and input
    var fidLabel = document.createElement("label");
    fidLabel.setAttribute("for", "gameid");
    fidLabel.setAttribute("id", "fidLabel");
    var fidLabelText = document.createTextNode("Game ID");
    fidLabel.appendChild(fidLabelText);

    var gameid = document.createElement("input");
    gameid.setAttribute("id", "gameid");
    gameid.setAttribute("name", "text-input");
    gameid.setAttribute("type", "text");
    gameid.setAttribute("class", "form-control");

    // append items to container
    container.appendChild(fidLabel);
    container.appendChild(gameid);

    // add submit button
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "btn btn-primary");
    var submitButtonText = document.createTextNode("Submit");
    submitButton.appendChild(submitButtonText);

    var submitContainer = document.getElementById("submit-container");
    submitContainer.appendChild(submitButton);
}

function permuteFormEdit() {
    resetForm();

    // declare container
    var container = document.getElementById("form-container");

    // game id label and input
    var fidLabel = document.createElement("label");
    fidLabel.setAttribute("for", "gameid");
    fidLabel.setAttribute("id", "fidLabel");
    var fidLabelText = document.createTextNode("Game ID");
    fidLabel.appendChild(fidLabelText);

    var gameid = document.createElement("input");
    gameid.setAttribute("id", "gameid");
    gameid.setAttribute("name", "text-input");
    gameid.setAttribute("type", "text");
    gameid.setAttribute("class", "form-control");

    // winning team score label and input
    var winningTeamLabel = document.createElement("label");
    winningTeamLabel.setAttribute("for", "winningTeamInput");
    winningTeamLabel.setAttribute("id", "winningTeamLabel");
    var winningTeamLabelText = document.createTextNode("Winning Team Score");
    winningTeamLabel.appendChild(winningTeamLabelText);

    var winningTeamInput = document.createElement("input");
    winningTeamInput.setAttribute("id", "winningTeamInput");
    winningTeamInput.setAttribute("name", "text-input");
    winningTeamInput.setAttribute("type", "text");
    winningTeamInput.setAttribute("class", "form-control");

    // losing team score label and input
    var losingTeamLabel = document.createElement("label");
    losingTeamLabel.setAttribute("for", "losingTeamInput");
    losingTeamLabel.setAttribute("id", "losingTeamLabel");
    var losingTeamLabelText = document.createTextNode("Losing Team Score");
    losingTeamLabel.appendChild(losingTeamLabelText);

    var losingTeamInput = document.createElement("input");
    losingTeamInput.setAttribute("id", "losingTeamInput");
    losingTeamInput.setAttribute("name", "text-input");
    losingTeamInput.setAttribute("type", "text");
    losingTeamInput.setAttribute("class", "form-control");

    // append items to container
    container.appendChild(fidLabel);
    container.appendChild(gameid);
    container.appendChild(winningTeamLabel);
    container.appendChild(winningTeamInput);
    container.appendChild(losingTeamLabel);
    container.appendChild(losingTeamInput);

    // add submit button
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "btn btn-primary");
    var submitButtonText = document.createTextNode("Submit");
    submitButton.appendChild(submitButtonText);

    var submitContainer = document.getElementById("submit-container");
    submitContainer.appendChild(submitButton);
}

function permuteFormReset() {
    resetForm();

    // declare container
    var container = document.getElementById("form-container");

    // game id label and input
    var fidLabel = document.createElement("label");
    fidLabel.setAttribute("for", "gameid");
    fidLabel.setAttribute("id", "fidLabel");
    var fidLabelText = document.createTextNode("Game ID");
    fidLabel.appendChild(fidLabelText);

    var gameid = document.createElement("input");
    gameid.setAttribute("id", "gameid");
    gameid.setAttribute("name", "text-input");
    gameid.setAttribute("type", "text");
    gameid.setAttribute("class", "form-control");

    // append items to container
    container.appendChild(fidLabel);
    container.appendChild(gameid);

    // add submit button
    var submitButton = document.createElement("button");
    submitButton.setAttribute("id", "submit-button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("class", "btn btn-primary");
    var submitButtonText = document.createTextNode("Submit");
    submitButton.appendChild(submitButtonText);

    var submitContainer = document.getElementById("submit-container");
    submitContainer.appendChild(submitButton);
}

function determineOperation() {
    var dropdownValue = document.getElementById("select-operation").value;
    switch (dropdownValue) {
        case "none":
            break;
        case "add":
            handleAdd();
            break;
        case "remove":
            handleRemove();
            break;
        case "edit":
            handleEdit();
            break;
        case "reset":
            handleReset();
            break;
    }
}

function handleAdd() {
    resetResults();

    var date = document.getElementById("dateInput").value;
    var winningTeam = document.getElementById("winningTeamInput").value;
    var losingTeam = document.getElementById("losingTeamInput").value;
    var score = document.getElementById("scoreInput").value;

    if (date && winningTeam && losingTeam && score) {
        scores = score.split('-');
        scores[0] = parseInt(scores[0]);
        scores[1] = parseInt(scores[1]);
        data = {
            'finalScore': score,
            'winnerScore': scores[0],
            'loserScore': scores[1],
            'totalScore': scores[0] + scores[1],
            'pointDiff': scores[0] - scores[1],
            'teams': winningTeam + " vs. " + losingTeam,
            'date': date
        }

        var xhr = new XMLHttpRequest();
        var url = "http://student04.cse.nd.edu:51049/scores/";

        xhr.open("POST", url, true);

        xhr.onload = function (e) {
            displayResultsAdd(xhr.responseText);
        }

        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        }

        xhr.send(JSON.stringify(data));
    }
    else {
        handleInvalidInput();
    }
}

function handleRemove() {
    resetResults();

    var fid = document.getElementById("gameid").value;
    if (Number.isInteger(parseInt(fid)) || !fid) {

        var xhr = new XMLHttpRequest();
        var url = "http://student04.cse.nd.edu:51049/scores/" + fid;

        xhr.open("DELETE", url, true);

        xhr.onload = function (e) {
            displayResultsRemove(xhr.responseText, fid);
        }

        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        }

        xhr.send(null);
    }
    else {
        handleInvalidInput();
    }
}

function handleEdit() {
    resetResults();

    var fid = document.getElementById("gameid").value;
    var winningTeamScore = document.getElementById("winningTeamInput").value;
    var losingTeamScore = document.getElementById("losingTeamInput").value;

    if (fid && winningTeamScore && losingTeamScore) {

        data = {
            "finalScore": winningTeamScore.toString() + "-" + losingTeamScore.toString(),
            "winnerScore": winningTeamScore,
            "loserScore": losingTeamScore
        };

        var xhr = new XMLHttpRequest();
        var url = "http://student04.cse.nd.edu:51049/scores/" + fid;

        xhr.open("PUT", url, true);

        xhr.onload = function (e) {
            displayResultsEdit(xhr.responseText);
        }

        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        }

        xhr.send(JSON.stringify(data));
    }
    else {
        handleInvalidInput();
    }
}

function handleReset() {
    resetResults();

    var fid = document.getElementById("gameid").value;
    if (Number.isInteger(parseInt(fid)) || !fid) {
        var xhr = new XMLHttpRequest();
        var url = "http://student04.cse.nd.edu:51049/reset/" + fid;
        data = {};

        xhr.open("PUT", url, true)

        xhr.onload = function (e) {
            displayResultsReset(xhr.responseText, fid);
        }

        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        }

        xhr.send(JSON.stringify(data));
    }
    else {
        handleInvalidInput();
    }
}

function displayResultsAdd(responseText) {
    response = JSON.parse(responseText);
    var label = document.createElement("label");
    label.setAttribute("id", "results-label");
    console.log(response);
    if (response['result'] == 'success') {
        var labelText = document.createTextNode("Game was successfully added with ID " + response['id'] + ".");
    }
    else {
        var labelText = document.createTextNode("Failed to add game.");
    }
    label.appendChild(labelText);
    var container = document.getElementById("results-container");
    container.appendChild(label);
}

function displayResultsRemove(responseText, fid) {
    response = JSON.parse(responseText);
    var label = document.createElement("label");
    label.setAttribute("id", "results-label");
    if (response['result'] == 'success') {
        if (fid == '') {
            var labelText = document.createTextNode("All games have been deleted.");
        }
        else {
            var labelText = document.createTextNode("Game with ID " + fid + " has been deleted.");
        }
    }
    else {
        var labelText = document.createTextNode("Game could not be deleted. An error may have occurred or the game may not exist.");
    }
    label.appendChild(labelText);
    var container = document.getElementById("results-container");
    container.appendChild(label);
}

function displayResultsEdit(responseText) {
    response = JSON.parse(responseText);
    var label = document.createElement("label");
    label.setAttribute("id", "results-label");
    if (response['result'] == 'success') {
        var labelText = document.createTextNode("Game has successfully been editted.");
    }
    else {
        var labelText = document.createTextNode("Failed to edit game.");
    }
    label.appendChild(labelText);
    var container = document.getElementById("results-container");
    container.appendChild(label);
}

function displayResultsReset(responseText, fid) {
    response = JSON.parse(responseText);
    var label = document.createElement("label");
    label.setAttribute("id", "results-label");
    if (response['result'] == 'success') {
        if (fid == '') {
            var labelText = document.createTextNode("All games have been reset.");
        }
        else {
            var labelText = document.createTextNode("Game with ID " + fid + " has been reset.");
        }
    }
    else {
        var labelText = document.createTextNode("Failed to reset game. ID may not exist in original database.");
    }
    label.appendChild(labelText);
    var container = document.getElementById("results-container");
    container.appendChild(label);
}

function resetForm() {
    // remove submit button
    var submitButton = document.getElementById("submit-button");
    if (typeof (submitButton) != 'undefined' && submitButton != null) {
        submitButton.remove();
    }

    // handle add mode
    var dateLabel = document.getElementById("dateLabel");
    if (typeof (dateLabel) != 'undefined' && dateLabel != null) {
        dateLabel.remove();
    }
    var dateInput = document.getElementById("dateInput");
    if (typeof (dateInput) != 'undefined' && dateInput != null) {
        dateInput.remove();
    }

    // handle remove mode
    var fidLabel = document.getElementById("fidLabel");
    if (typeof (fidLabel) != 'undefined' && fidLabel != null) {
        fidLabel.remove();
    }
    var gameid = document.getElementById("gameid");
    if (typeof (gameid) != 'undefined' && gameid != null) {
        gameid.remove();
    }

    // handle edit mode
    var winningTeamLabel = document.getElementById("winningTeamLabel");
    if (typeof (winningTeamLabel) != 'undefined' && winningTeamLabel != null) {
        winningTeamLabel.remove();
    }
    var winningTeamInput = document.getElementById("winningTeamInput");
    if (typeof (winningTeamInput) != 'undefined' && winningTeamInput != null) {
        winningTeamInput.remove();
    }
    var losingTeamLabel = document.getElementById("losingTeamLabel");
    if (typeof (losingTeamLabel) != 'undefined' && losingTeamLabel != null) {
        losingTeamLabel.remove();
    }
    var losingTeamInput = document.getElementById("losingTeamInput");
    if (typeof (losingTeamInput) != 'undefined' && losingTeamInput != null) {
        losingTeamInput.remove();
    }
    var scoreLabel = document.getElementById("scoreLabel");
    if (typeof (scoreLabel) != 'undefined' && scoreLabel != null) {
        scoreLabel.remove();
    }
    var scoreInput = document.getElementById("scoreInput");
    if (typeof (scoreInput) != 'undefined' && scoreInput != null) {
        scoreInput.remove();
    }

    resetResults();
}

function resetResults() {
    // remove results
    var resultsLabel = document.getElementById("results-label");
    if (typeof (resultsLabel) != 'undefined' && resultsLabel != null) {
        resultsLabel.remove();
    }
}

function handleInvalidInput() {
    var label = document.createElement("label");
    label.setAttribute("id", "results-label");
    var labelText = document.createTextNode("Invalid Input.");
    label.appendChild(labelText);
    var container = document.getElementById("results-container");
    container.appendChild(label);
}