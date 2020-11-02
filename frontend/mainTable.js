var xhr = new XMLHttpRequest();
var url = "http://student05.cse.nd.edu:51087/scores/";
xhr.open("GET", url, true);

xhr.onload = function (e) {
    populateDict(xhr.responseText);
}

xhr.onerror = function (e) {
    console.error(xhr.statusText);
}

xhr.send();

function populateDict(responseText) {
    response = JSON.parse(responseText)['games'];

    // set dicts
    var teams = {
        'cards': { 'name': 'Cardinals', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'falcs': { 'name': 'Falcons', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'raves': { 'name': 'Ravens', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'bills': { 'name': 'Bills', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'pants': { 'name': 'Panthers', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'bengs': { 'name': 'Bengals', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'bears': { 'name': 'Bears', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'brows': { 'name': 'Browns', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'cowbs': { 'name': 'Cowboys', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'brons': { 'name': 'Broncos', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'lions': { 'name': 'Lions', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'packs': { 'name': 'Packers', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'texas': { 'name': 'Texans', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'colts': { 'name': 'Colts', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'chies': { 'name': 'Chiefs', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'raids': { 'name': 'Raiders', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'chars': { 'name': 'Chargers', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'rams': { 'name': 'Rams', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'jagus': { 'name': 'Jaguars', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'dolps': { 'name': 'Dolphins', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'vikis': { 'name': 'Vikings', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'patrs': { 'name': 'Patriots', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'sains': { 'name': 'Saints', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'gians': { 'name': 'Giants', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'jets': { 'name': 'Jets', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'eagls': { 'name': 'Eagles', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'nines': { 'name': '49ers', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'seahs': { 'name': 'Seahawks', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'stees': { 'name': 'Steelers', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'buccs': { 'name': 'Buccaneers', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'titas': { 'name': 'Titans', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 },
        'wash': { 'name': 'Washington', 'wins': 0, 'loss': 0, 'perc': '0%', 'rank': 0 }
    }

    for (var i = 0; i < response.length; i++) {
        var parsedTeams = parseTeams(response[i]['teams']);
        switch (parsedTeams[0]) {
            case 'Cardinals':
                teams['cards']['wins']++;
                break;
            case 'Falcons':
                teams['falcs']['wins']++;
                break;
            case 'Ravens':
                teams['raves']['wins']++;
                break;
            case 'Bills':
                teams['bills']['wins']++;
                break;
            case 'Panthers':
                teams['pants']['wins']++;
                break;
            case 'Bengals':
                teams['bengs']['wins']++;
                break;
            case 'Bears':
                teams['bears']['wins']++;
                break;
            case 'Browns':
                teams['brows']['wins']++;
                break;
            case 'Cowboys':
                teams['cowbs']['wins']++;
                break;
            case 'Broncos':
                teams['brons']['wins']++;
                break;
            case 'Lions':
                teams['lions']['wins']++;
                break;
            case 'Packers':
                teams['packs']['wins']++;
                break;
            case 'Texans':
                teams['texas']['wins']++;
                break;
            case 'Colts':
                teams['colts']['wins']++;
                break;
            case 'Chiefs':
                teams['chies']['wins']++;
                break;
            case 'Raiders':
                teams['raids']['wins']++;
                break;
            case 'Chargers':
                teams['chars']['wins']++;
                break;
            case 'Rams':
                teams['rams']['wins']++;
                break;
            case 'Jaguars':
                teams['jagus']['wins']++;
                break;
            case 'Dolphins':
                teams['dolps']['wins']++;
                break;
            case 'Vikings':
                teams['vikis']['wins']++;
                break;
            case 'Patriots':
                teams['patrs']['wins']++;
                break;
            case 'Saints':
                teams['sains']['wins']++;
                break;
            case 'Giants':
                teams['gians']['wins']++;
                break;
            case 'Jets':
                teams['jets']['wins']++;
                break;
            case 'Eagles':
                teams['eagls']['wins']++;
                break;
            case '49ers':
                teams['nines']['wins']++;
                break;
            case 'Seahawks':
                teams['seahs']['wins']++;
                break;
            case 'Steelers':
                teams['stees']['wins']++;
                break;
            case 'Buccaneers':
                teams['buccs']['wins']++;
                break;
            case 'Titans':
                teams['titas']['wins']++;
                break;
            case 'Team':
                teams['wash']['wins']++;
                break;
            case 'Redskins':
                teams['wash']['wins']++;
                break;
        }
        switch (parsedTeams[1]) {
            case 'Cardinals':
                teams['cards']['loss']++;
                break;
            case 'Falcons':
                teams['falcs']['loss']++;
                break;
            case 'Ravens':
                teams['raves']['loss']++;
                break;
            case 'Bills':
                teams['bills']['loss']++;
                break;
            case 'Panthers':
                teams['pants']['loss']++;
                break;
            case 'Bengals':
                teams['bengs']['loss']++;
                break;
            case 'Bears':
                teams['bears']['loss']++;
                break;
            case 'Browns':
                teams['brows']['loss']++;
                break;
            case 'Cowboys':
                teams['cowbs']['loss']++;
                break;
            case 'Broncos':
                teams['brons']['loss']++;
                break;
            case 'Lions':
                teams['lions']['loss']++;
                break;
            case 'Packers':
                teams['packs']['loss']++;
                break;
            case 'Texans':
                teams['texas']['loss']++;
                break;
            case 'Colts':
                teams['colts']['loss']++;
                break;
            case 'Chiefs':
                teams['chies']['loss']++;
                break;
            case 'Raiders':
                teams['raids']['loss']++;
                break;
            case 'Chargers':
                teams['chars']['loss']++;
                break;
            case 'Rams':
                teams['rams']['loss']++;
                break;
            case 'Jaguars':
                teams['jagus']['loss']++;
                break;
            case 'Dolphins':
                teams['dolps']['loss']++;
                break;
            case 'Vikings':
                teams['vikis']['loss']++;
                break;
            case 'Patriots':
                teams['patrs']['loss']++;
                break;
            case 'Saints':
                teams['sains']['loss']++;
                break;
            case 'Giants':
                teams['gians']['loss']++;
                break;
            case 'Jets':
                teams['jets']['loss']++;
                break;
            case 'Eagles':
                teams['eagls']['loss']++;
                break;
            case '49ers':
                teams['nines']['loss']++;
                break;
            case 'Seahawks':
                teams['seahs']['loss']++;
                break;
            case 'Steelers':
                teams['stees']['loss']++;
                break;
            case 'Buccaneers':
                teams['buccs']['loss']++;
                break;
            case 'Titans':
                teams['titas']['loss']++;
                break;
            case 'Team':
                teams['wash']['loss']++;
                break;
            case 'Redskins':
                teams['wash']['loss']++;
                break;
        }
    }

    // calculate win percentages
    for (team in teams) {
        teams[team]['perc'] = calcWinPercentString(teams[team]['wins'], teams[team]['loss']);
    }

    // calculate ranks based on win percentage
    teams = calcRankings(teams);

    // update the html table
    for (team in teams) {
        updateTeam(teams[team]);
    }
}

function parseTeams(inputString) {
    var res = inputString.split(" ");
    var out = ["", ""];

    var i = 1;
    while (res[i] != 'vs.') {
        i++;
    }
    i--;
    out[0] = res[i];

    i = i + 2;

    while (res[i] != null) {
        i = i + 1;
    }
    i--;
    out[1] = res[i];

    return out;
}

function calcWinPercentString(wins, losses) {
    return (((wins / (wins + losses)) * 100).toFixed(2)).toString() + "%";
}

function updateTeam(inputDict) {
    switch (inputDict['name']) {
        case 'Cardinals':
            var wins = document.getElementById("cardswins");
            var loss = document.getElementById("cardsloss");
            var perc = document.getElementById("cardsperc");
            var rank = document.getElementById("cardsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Falcons':
            var wins = document.getElementById("falcswins");
            var loss = document.getElementById("falcsloss");
            var perc = document.getElementById("falcsperc");
            var rank = document.getElementById("falcsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Ravens':
            var wins = document.getElementById("raveswins");
            var loss = document.getElementById("ravesloss");
            var perc = document.getElementById("ravesperc");
            var rank = document.getElementById("ravesrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Bills':
            var wins = document.getElementById("billswins");
            var loss = document.getElementById("billsloss");
            var perc = document.getElementById("billsperc");
            var rank = document.getElementById("billsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Panthers':
            var wins = document.getElementById("pantswins");
            var loss = document.getElementById("pantsloss");
            var perc = document.getElementById("pantsperc");
            var rank = document.getElementById("pantsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Bengals':
            var wins = document.getElementById("bengswins");
            var loss = document.getElementById("bengsloss");
            var perc = document.getElementById("bengsperc");
            var rank = document.getElementById("bengsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Bears':
            var wins = document.getElementById("bearswins");
            var loss = document.getElementById("bearsloss");
            var perc = document.getElementById("bearsperc");
            var rank = document.getElementById("bearsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Browns':
            var wins = document.getElementById("browswins");
            var loss = document.getElementById("browsloss");
            var perc = document.getElementById("browsperc");
            var rank = document.getElementById("browsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Cowboys':
            var wins = document.getElementById("cowbswins");
            var loss = document.getElementById("cowbsloss");
            var perc = document.getElementById("cowbsperc");
            var rank = document.getElementById("cowbsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Broncos':
            var wins = document.getElementById("bronswins");
            var loss = document.getElementById("bronsloss");
            var perc = document.getElementById("bronsperc");
            var rank = document.getElementById("bronsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Lions':
            var wins = document.getElementById("lionswins");
            var loss = document.getElementById("lionsloss");
            var perc = document.getElementById("lionsperc");
            var rank = document.getElementById("lionsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Packers':
            var wins = document.getElementById("packswins");
            var loss = document.getElementById("packsloss");
            var perc = document.getElementById("packsperc");
            var rank = document.getElementById("packsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Texans':
            var wins = document.getElementById("texaswins");
            var loss = document.getElementById("texasloss");
            var perc = document.getElementById("texasperc");
            var rank = document.getElementById("texasrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Colts':
            var wins = document.getElementById("coltswins");
            var loss = document.getElementById("coltsloss");
            var perc = document.getElementById("coltsperc");
            var rank = document.getElementById("coltsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Chiefs':
            var wins = document.getElementById("chieswins");
            var loss = document.getElementById("chiesloss");
            var perc = document.getElementById("chiesperc");
            var rank = document.getElementById("chiesrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Raiders':
            var wins = document.getElementById("raidswins");
            var loss = document.getElementById("raidsloss");
            var perc = document.getElementById("raidsperc");
            var rank = document.getElementById("raidsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Chargers':
            var wins = document.getElementById("charswins");
            var loss = document.getElementById("charsloss");
            var perc = document.getElementById("charsperc");
            var rank = document.getElementById("charsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Rams':
            var wins = document.getElementById("ramswins");
            var loss = document.getElementById("ramsloss");
            var perc = document.getElementById("ramsperc");
            var rank = document.getElementById("ramsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Jaguars':
            var wins = document.getElementById("jaguswins");
            var loss = document.getElementById("jagusloss");
            var perc = document.getElementById("jagusperc");
            var rank = document.getElementById("jagusrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Dolphins':
            var wins = document.getElementById("dolpswins");
            var loss = document.getElementById("dolpsloss");
            var perc = document.getElementById("dolpsperc");
            var rank = document.getElementById("dolpsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Vikings':
            var wins = document.getElementById("vikiswins");
            var loss = document.getElementById("vikisloss");
            var perc = document.getElementById("vikisperc");
            var rank = document.getElementById("vikisrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Patriots':
            var wins = document.getElementById("patrswins");
            var loss = document.getElementById("patrsloss");
            var perc = document.getElementById("patrsperc");
            var rank = document.getElementById("patrsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Saints':
            var wins = document.getElementById("sainswins");
            var loss = document.getElementById("sainsloss");
            var perc = document.getElementById("sainsperc");
            var rank = document.getElementById("sainsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Giants':
            var wins = document.getElementById("gianswins");
            var loss = document.getElementById("giansloss");
            var perc = document.getElementById("giansperc");
            var rank = document.getElementById("giansrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Jets':
            var wins = document.getElementById("jetswins");
            var loss = document.getElementById("jetsloss");
            var perc = document.getElementById("jetsperc");
            var rank = document.getElementById("jetsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Eagles':
            var wins = document.getElementById("eaglswins");
            var loss = document.getElementById("eaglsloss");
            var perc = document.getElementById("eaglsperc");
            var rank = document.getElementById("eaglsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case '49ers':
            var wins = document.getElementById("nineswins");
            var loss = document.getElementById("ninesloss");
            var perc = document.getElementById("ninesperc");
            var rank = document.getElementById("ninesrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Seahawks':
            var wins = document.getElementById("seahswins");
            var loss = document.getElementById("seahsloss");
            var perc = document.getElementById("seahsperc");
            var rank = document.getElementById("seahsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Steelers':
            var wins = document.getElementById("steeswins");
            var loss = document.getElementById("steesloss");
            var perc = document.getElementById("steesperc");
            var rank = document.getElementById("steesrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Buccaneers':
            var wins = document.getElementById("buccswins");
            var loss = document.getElementById("buccsloss");
            var perc = document.getElementById("buccsperc");
            var rank = document.getElementById("buccsrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Titans':
            var wins = document.getElementById("titaswins");
            var loss = document.getElementById("titasloss");
            var perc = document.getElementById("titasperc");
            var rank = document.getElementById("titasrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
        case 'Washington':
            var wins = document.getElementById("washwins");
            var loss = document.getElementById("washloss");
            var perc = document.getElementById("washperc");
            var rank = document.getElementById("washrank");
            wins.innerHTML = inputDict['wins'];
            loss.innerHTML = inputDict['loss'];
            perc.innerHTML = inputDict['perc'];
            rank.innerHTML = inputDict['rank'];
            break;
    }
}

function calcRankings(teams) {
    var items = Object.keys(teams).map(function (key) {
        return [key, teams[key]['perc']];
    });

    items.sort(function (first, second) {
        return parsePercent(second[1]) - parsePercent(first[1]);
    });

    var index = 1;
    for (var i = 0; i < 32; i++) {
        teams[items[i][0]]['rank'] = i + 1;
    }

    return teams;
}

function parsePercent(percent) {
    return parseFloat(percent.slice(0, 4));
}
