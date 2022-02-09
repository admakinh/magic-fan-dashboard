// $(document).ready(function() {
const testing = 0;
const btnEasternStandingNBA = $('#easternStanding');
const btnWesternStandingNBA = $('#westernStanding');
const standingsEl = $('#standing-data');
const standingsEl2 = standingsEl.clone();
standingsEl2.attr('id', 'standing-data2')
const requestlRootNBA = 'api-nba-v1.p.rapidapi.com';
var requestPathNBA ='';
const apiKeyNBA = '0ea8192811msh70fba6f7f64f1e4p11b8b9jsnb91a12aad193';
var gameIdNBA = 1234;
var playerIdNBA = 1234;

// for testing
const standings = {
    "api": {
        "status": 200,
        "message": "GET standings/standard/2021",
        "results": 30,
        "filters": [
            "conference",
            "division",
            "teamId"
        ],
        "standings": [
            {
                "league": "standard",
                "teamId": "41",
                "win": "24",
                "loss": "27",
                "gamesBehind": "8.5",
                "lastTenWin": "3",
                "lastTenLoss": "7",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "11",
                    "win": "17",
                    "loss": "17"
                },
                "division": {
                    "name": "southeast",
                    "rank": "4",
                    "win": "6",
                    "loss": "5",
                    "GamesBehind": "7.5"
                },
                "winPercentage": ".471",
                "lossPercentage": ".529",
                "home": {
                    "win": "13",
                    "loss": "12"
                },
                "away": {
                    "win": "11",
                    "loss": "15"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "5",
                "win": "28",
                "loss": "24",
                "gamesBehind": "5.0",
                "lastTenWin": "5",
                "lastTenLoss": "5",
                "streak": "2",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "7",
                    "win": "18",
                    "loss": "13"
                },
                "division": {
                    "name": "southeast",
                    "rank": "2",
                    "win": "5",
                    "loss": "5",
                    "GamesBehind": "4.0"
                },
                "winPercentage": ".538",
                "lossPercentage": ".462",
                "home": {
                    "win": "14",
                    "loss": "8"
                },
                "away": {
                    "win": "14",
                    "loss": "16"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "20",
                "win": "32",
                "loss": "20",
                "gamesBehind": "1.0",
                "lastTenWin": "5",
                "lastTenLoss": "5",
                "streak": "3",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "2",
                    "win": "20",
                    "loss": "12"
                },
                "division": {
                    "name": "southeast",
                    "rank": "1",
                    "win": "8",
                    "loss": "2",
                    "GamesBehind": "0.0"
                },
                "winPercentage": ".615",
                "lossPercentage": ".385",
                "home": {
                    "win": "18",
                    "loss": "6"
                },
                "away": {
                    "win": "14",
                    "loss": "14"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "1",
                "win": "24",
                "loss": "26",
                "gamesBehind": "8.0",
                "lastTenWin": "7",
                "lastTenLoss": "3",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "10",
                    "win": "14",
                    "loss": "16"
                },
                "division": {
                    "name": "southeast",
                    "rank": "3",
                    "win": "6",
                    "loss": "5",
                    "GamesBehind": "7.0"
                },
                "winPercentage": ".480",
                "lossPercentage": ".520",
                "home": {
                    "win": "14",
                    "loss": "12"
                },
                "away": {
                    "win": "10",
                    "loss": "14"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "26",
                "win": "12",
                "loss": "41",
                "gamesBehind": "21.5",
                "lastTenWin": "4",
                "lastTenLoss": "6",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "15",
                    "win": "8",
                    "loss": "29"
                },
                "division": {
                    "name": "southeast",
                    "rank": "5",
                    "win": "2",
                    "loss": "10",
                    "GamesBehind": "20.5"
                },
                "winPercentage": ".226",
                "lossPercentage": ".774",
                "home": {
                    "win": "5",
                    "loss": "18"
                },
                "away": {
                    "win": "7",
                    "loss": "23"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "24",
                "win": "24",
                "loss": "28",
                "gamesBehind": "9.0",
                "lastTenWin": "3",
                "lastTenLoss": "7",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "12",
                    "win": "14",
                    "loss": "21"
                },
                "division": {
                    "name": "atlantic",
                    "rank": "5",
                    "win": "4",
                    "loss": "6",
                    "GamesBehind": "7.5"
                },
                "winPercentage": ".462",
                "lossPercentage": ".538",
                "home": {
                    "win": "13",
                    "loss": "15"
                },
                "away": {
                    "win": "11",
                    "loss": "13"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "4",
                "win": "29",
                "loss": "21",
                "gamesBehind": "3.0",
                "lastTenWin": "3",
                "lastTenLoss": "7",
                "streak": "5",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "6",
                    "win": "20",
                    "loss": "9"
                },
                "division": {
                    "name": "atlantic",
                    "rank": "2",
                    "win": "6",
                    "loss": "1",
                    "GamesBehind": "1.5"
                },
                "winPercentage": ".580",
                "lossPercentage": ".420",
                "home": {
                    "win": "12",
                    "loss": "13"
                },
                "away": {
                    "win": "17",
                    "loss": "8"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "27",
                "win": "31",
                "loss": "20",
                "gamesBehind": "1.5",
                "lastTenWin": "7",
                "lastTenLoss": "3",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "3",
                    "win": "17",
                    "loss": "13"
                },
                "division": {
                    "name": "atlantic",
                    "rank": "1",
                    "win": "4",
                    "loss": "6",
                    "GamesBehind": "0.0"
                },
                "winPercentage": ".608",
                "lossPercentage": ".392",
                "home": {
                    "win": "14",
                    "loss": "11"
                },
                "away": {
                    "win": "17",
                    "loss": "9"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "38",
                "win": "26",
                "loss": "23",
                "gamesBehind": "5.5",
                "lastTenWin": "6",
                "lastTenLoss": "4",
                "streak": "3",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "8",
                    "win": "18",
                    "loss": "14"
                },
                "division": {
                    "name": "atlantic",
                    "rank": "3",
                    "win": "5",
                    "loss": "5",
                    "GamesBehind": "4.0"
                },
                "winPercentage": ".531",
                "lossPercentage": ".469",
                "home": {
                    "win": "14",
                    "loss": "12"
                },
                "away": {
                    "win": "12",
                    "loss": "11"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "2",
                "win": "28",
                "loss": "25",
                "gamesBehind": "5.5",
                "lastTenWin": "7",
                "lastTenLoss": "3",
                "streak": "3",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "9",
                    "win": "19",
                    "loss": "14"
                },
                "division": {
                    "name": "atlantic",
                    "rank": "4",
                    "win": "5",
                    "loss": "6",
                    "GamesBehind": "4.0"
                },
                "winPercentage": ".528",
                "lossPercentage": ".472",
                "home": {
                    "win": "18",
                    "loss": "10"
                },
                "away": {
                    "win": "10",
                    "loss": "15"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "6",
                "win": "32",
                "loss": "18",
                "gamesBehind": "0.0",
                "lastTenWin": "5",
                "lastTenLoss": "5",
                "streak": "2",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "1",
                    "win": "21",
                    "loss": "11"
                },
                "division": {
                    "name": "central",
                    "rank": "1",
                    "win": "6",
                    "loss": "3",
                    "GamesBehind": "0.0"
                },
                "winPercentage": ".640",
                "lossPercentage": ".360",
                "home": {
                    "win": "19",
                    "loss": "6"
                },
                "away": {
                    "win": "13",
                    "loss": "12"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "21",
                "win": "32",
                "loss": "21",
                "gamesBehind": "1.5",
                "lastTenWin": "6",
                "lastTenLoss": "4",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "4",
                    "win": "21",
                    "loss": "16"
                },
                "division": {
                    "name": "central",
                    "rank": "2",
                    "win": "7",
                    "loss": "3",
                    "GamesBehind": "1.5"
                },
                "winPercentage": ".604",
                "lossPercentage": ".396",
                "home": {
                    "win": "19",
                    "loss": "9"
                },
                "away": {
                    "win": "13",
                    "loss": "12"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "7",
                "win": "31",
                "loss": "21",
                "gamesBehind": "2.0",
                "lastTenWin": "7",
                "lastTenLoss": "3",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "5",
                    "win": "17",
                    "loss": "11"
                },
                "division": {
                    "name": "central",
                    "rank": "3",
                    "win": "5",
                    "loss": "3",
                    "GamesBehind": "2.0"
                },
                "winPercentage": ".596",
                "lossPercentage": ".404",
                "home": {
                    "win": "16",
                    "loss": "9"
                },
                "away": {
                    "win": "15",
                    "loss": "12"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "15",
                "win": "19",
                "loss": "34",
                "gamesBehind": "14.5",
                "lastTenWin": "4",
                "lastTenLoss": "6",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "13",
                    "win": "8",
                    "loss": "24"
                },
                "division": {
                    "name": "central",
                    "rank": "4",
                    "win": "2",
                    "loss": "7",
                    "GamesBehind": "14.5"
                },
                "winPercentage": ".358",
                "lossPercentage": ".642",
                "home": {
                    "win": "13",
                    "loss": "14"
                },
                "away": {
                    "win": "6",
                    "loss": "20"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "10",
                "win": "12",
                "loss": "38",
                "gamesBehind": "20.0",
                "lastTenWin": "3",
                "lastTenLoss": "7",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "east",
                    "rank": "14",
                    "win": "8",
                    "loss": "20"
                },
                "division": {
                    "name": "central",
                    "rank": "5",
                    "win": "3",
                    "loss": "7",
                    "GamesBehind": "20.0"
                },
                "winPercentage": ".240",
                "lossPercentage": ".760",
                "home": {
                    "win": "8",
                    "loss": "16"
                },
                "away": {
                    "win": "4",
                    "loss": "22"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "19",
                "win": "36",
                "loss": "18",
                "gamesBehind": "7.0",
                "lastTenWin": "6",
                "lastTenLoss": "4",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "3",
                    "win": "26",
                    "loss": "11"
                },
                "division": {
                    "name": "southwest",
                    "rank": "1",
                    "win": "5",
                    "loss": "4",
                    "GamesBehind": "0.0"
                },
                "winPercentage": ".667",
                "lossPercentage": ".333",
                "home": {
                    "win": "19",
                    "loss": "9"
                },
                "away": {
                    "win": "17",
                    "loss": "9"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "14",
                "win": "15",
                "loss": "36",
                "gamesBehind": "26.5",
                "lastTenWin": "4",
                "lastTenLoss": "6",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "15",
                    "win": "7",
                    "loss": "22"
                },
                "division": {
                    "name": "southwest",
                    "rank": "5",
                    "win": "2",
                    "loss": "5",
                    "GamesBehind": "19.5"
                },
                "winPercentage": ".294",
                "lossPercentage": ".706",
                "home": {
                    "win": "8",
                    "loss": "16"
                },
                "away": {
                    "win": "7",
                    "loss": "20"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "8",
                "win": "29",
                "loss": "23",
                "gamesBehind": "13.0",
                "lastTenWin": "6",
                "lastTenLoss": "4",
                "streak": "2",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "6",
                    "win": "22",
                    "loss": "13"
                },
                "division": {
                    "name": "southwest",
                    "rank": "2",
                    "win": "10",
                    "loss": "2",
                    "GamesBehind": "6.0"
                },
                "winPercentage": ".558",
                "lossPercentage": ".442",
                "home": {
                    "win": "16",
                    "loss": "10"
                },
                "away": {
                    "win": "13",
                    "loss": "13"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "31",
                "win": "19",
                "loss": "33",
                "gamesBehind": "23.0",
                "lastTenWin": "4",
                "lastTenLoss": "6",
                "streak": "2",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "12",
                    "win": "11",
                    "loss": "20"
                },
                "division": {
                    "name": "southwest",
                    "rank": "4",
                    "win": "2",
                    "loss": "6",
                    "GamesBehind": "16.0"
                },
                "winPercentage": ".365",
                "lossPercentage": ".635",
                "home": {
                    "win": "10",
                    "loss": "17"
                },
                "away": {
                    "win": "9",
                    "loss": "16"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "23",
                "win": "19",
                "loss": "32",
                "gamesBehind": "22.5",
                "lastTenWin": "4",
                "lastTenLoss": "6",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "11",
                    "win": "11",
                    "loss": "17"
                },
                "division": {
                    "name": "southwest",
                    "rank": "3",
                    "win": "2",
                    "loss": "4",
                    "GamesBehind": "15.5"
                },
                "winPercentage": ".373",
                "lossPercentage": ".627",
                "home": {
                    "win": "11",
                    "loss": "13"
                },
                "away": {
                    "win": "8",
                    "loss": "19"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "11",
                "win": "39",
                "loss": "13",
                "gamesBehind": "3.0",
                "lastTenWin": "8",
                "lastTenLoss": "2",
                "streak": "7",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "2",
                    "win": "22",
                    "loss": "8"
                },
                "division": {
                    "name": "pacific",
                    "rank": "2",
                    "win": "7",
                    "loss": "1",
                    "GamesBehind": "3.0"
                },
                "winPercentage": ".750",
                "lossPercentage": ".250",
                "home": {
                    "win": "24",
                    "loss": "4"
                },
                "away": {
                    "win": "15",
                    "loss": "9"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "30",
                "win": "18",
                "loss": "34",
                "gamesBehind": "24.0",
                "lastTenWin": "2",
                "lastTenLoss": "8",
                "streak": "7",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "13",
                    "win": "13",
                    "loss": "20"
                },
                "division": {
                    "name": "pacific",
                    "rank": "5",
                    "win": "5",
                    "loss": "6",
                    "GamesBehind": "24.0"
                },
                "winPercentage": ".346",
                "lossPercentage": ".654",
                "home": {
                    "win": "12",
                    "loss": "16"
                },
                "away": {
                    "win": "6",
                    "loss": "18"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "28",
                "win": "41",
                "loss": "9",
                "gamesBehind": "0.0",
                "lastTenWin": "10",
                "lastTenLoss": "0",
                "streak": "11",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "1",
                    "win": "26",
                    "loss": "7"
                },
                "division": {
                    "name": "pacific",
                    "rank": "1",
                    "win": "5",
                    "loss": "4",
                    "GamesBehind": "0.0"
                },
                "winPercentage": ".820",
                "lossPercentage": ".180",
                "home": {
                    "win": "22",
                    "loss": "5"
                },
                "away": {
                    "win": "19",
                    "loss": "4"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "16",
                "win": "26",
                "loss": "27",
                "gamesBehind": "16.5",
                "lastTenWin": "5",
                "lastTenLoss": "5",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "8",
                    "win": "13",
                    "loss": "20"
                },
                "division": {
                    "name": "pacific",
                    "rank": "3",
                    "win": "3",
                    "loss": "5",
                    "GamesBehind": "16.5"
                },
                "winPercentage": ".491",
                "lossPercentage": ".509",
                "home": {
                    "win": "15",
                    "loss": "12"
                },
                "away": {
                    "win": "11",
                    "loss": "15"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "17",
                "win": "24",
                "loss": "27",
                "gamesBehind": "17.5",
                "lastTenWin": "3",
                "lastTenLoss": "7",
                "streak": "3",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "9",
                    "win": "13",
                    "loss": "16"
                },
                "division": {
                    "name": "pacific",
                    "rank": "4",
                    "win": "2",
                    "loss": "6",
                    "GamesBehind": "17.5"
                },
                "winPercentage": ".471",
                "lossPercentage": ".529",
                "home": {
                    "win": "15",
                    "loss": "12"
                },
                "away": {
                    "win": "9",
                    "loss": "15"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "40",
                "win": "30",
                "loss": "21",
                "gamesBehind": "11.5",
                "lastTenWin": "2",
                "lastTenLoss": "8",
                "streak": "5",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "4",
                    "win": "19",
                    "loss": "11"
                },
                "division": {
                    "name": "northwest",
                    "rank": "1",
                    "win": "10",
                    "loss": "1",
                    "GamesBehind": "0.0"
                },
                "winPercentage": ".588",
                "lossPercentage": ".412",
                "home": {
                    "win": "15",
                    "loss": "10"
                },
                "away": {
                    "win": "15",
                    "loss": "11"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "22",
                "win": "26",
                "loss": "25",
                "gamesBehind": "15.5",
                "lastTenWin": "6",
                "lastTenLoss": "4",
                "streak": "2",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "7",
                    "win": "19",
                    "loss": "17"
                },
                "division": {
                    "name": "northwest",
                    "rank": "3",
                    "win": "7",
                    "loss": "4",
                    "GamesBehind": "4.0"
                },
                "winPercentage": ".510",
                "lossPercentage": ".490",
                "home": {
                    "win": "15",
                    "loss": "10"
                },
                "away": {
                    "win": "11",
                    "loss": "15"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "9",
                "win": "28",
                "loss": "22",
                "gamesBehind": "13.0",
                "lastTenWin": "7",
                "lastTenLoss": "3",
                "streak": "1",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "5",
                    "win": "17",
                    "loss": "15"
                },
                "division": {
                    "name": "northwest",
                    "rank": "2",
                    "win": "4",
                    "loss": "7",
                    "GamesBehind": "1.5"
                },
                "winPercentage": ".560",
                "lossPercentage": ".440",
                "home": {
                    "win": "13",
                    "loss": "9"
                },
                "away": {
                    "win": "15",
                    "loss": "13"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "29",
                "win": "21",
                "loss": "30",
                "gamesBehind": "20.5",
                "lastTenWin": "5",
                "lastTenLoss": "5",
                "streak": "2",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "10",
                    "win": "9",
                    "loss": "22"
                },
                "division": {
                    "name": "northwest",
                    "rank": "4",
                    "win": "1",
                    "loss": "7",
                    "GamesBehind": "9.0"
                },
                "winPercentage": ".412",
                "lossPercentage": ".588",
                "home": {
                    "win": "14",
                    "loss": "13"
                },
                "away": {
                    "win": "7",
                    "loss": "17"
                },
                "winStreak": "0",
                "tieBreakerPoints": ""
            },
            {
                "league": "standard",
                "teamId": "25",
                "win": "16",
                "loss": "34",
                "gamesBehind": "25.0",
                "lastTenWin": "3",
                "lastTenLoss": "7",
                "streak": "2",
                "seasonYear": "2021",
                "conference": {
                    "name": "west",
                    "rank": "14",
                    "win": "12",
                    "loss": "21"
                },
                "division": {
                    "name": "northwest",
                    "rank": "5",
                    "win": "2",
                    "loss": "5",
                    "GamesBehind": "13.5"
                },
                "winPercentage": ".320",
                "lossPercentage": ".680",
                "home": {
                    "win": "9",
                    "loss": "16"
                },
                "away": {
                    "win": "7",
                    "loss": "18"
                },
                "winStreak": "1",
                "tieBreakerPoints": ""
            }
        ]
    }
}
const teams = {
    "api": {
        "status": 200,
        "message": "GET teams/league/standard",
        "results": 56,
        "filters": [
            "teamId",
            "league",
            "city",
            "shortName",
            "nickName",
            "confName",
            "divName"
        ],
        "teams": [
            {
                "city": "Atlanta",
                "fullName": "Atlanta Hawks",
                "teamId": "1",
                "nickname": "Hawks",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png",
                "shortName": "ATL",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Southeast"
                    }
                }
            },
            {
                "city": "Boston",
                "fullName": "Boston Celtics",
                "teamId": "2",
                "nickname": "Celtics",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png",
                "shortName": "BOS",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Atlantic"
                    }
                }
            },
            {
                "city": "Brisbane",
                "fullName": "Brisbane Bullets",
                "teamId": "3",
                "nickname": "Bullets",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1b/Brisbane_Bullets_1992.png/130px-Brisbane_Bullets_1992.png",
                "shortName": "BNE",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Brooklyn",
                "fullName": "Brooklyn Nets",
                "teamId": "4",
                "nickname": "Nets",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Brooklyn_Nets_newlogo.svg/130px-Brooklyn_Nets_newlogo.svg.png",
                "shortName": "BKN",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Atlantic"
                    }
                }
            },
            {
                "city": "Charlotte",
                "fullName": "Charlotte Hornets",
                "teamId": "5",
                "nickname": "Hornets",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Hornets_de_Charlotte_logo.svg/1200px-Hornets_de_Charlotte_logo.svg.png",
                "shortName": "CHA",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Southeast"
                    }
                }
            },
            {
                "city": "Chicago",
                "fullName": "Chicago Bulls",
                "teamId": "6",
                "nickname": "Bulls",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d1/Bulls_de_Chicago_logo.svg/1200px-Bulls_de_Chicago_logo.svg.png",
                "shortName": "CHI",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Central"
                    }
                }
            },
            {
                "city": "Cleveland",
                "fullName": "Cleveland Cavaliers",
                "teamId": "7",
                "nickname": "Cavaliers",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/0/06/Cavs_de_Cleveland_logo_2017.png/150px-Cavs_de_Cleveland_logo_2017.png",
                "shortName": "CLE",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Central"
                    }
                }
            },
            {
                "city": "Dallas",
                "fullName": "Dallas Mavericks",
                "teamId": "8",
                "nickname": "Mavericks",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/b/b8/Mavericks_de_Dallas_logo.svg/150px-Mavericks_de_Dallas_logo.svg.png",
                "shortName": "DAL",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Southwest"
                    }
                }
            },
            {
                "city": "Denver",
                "fullName": "Denver Nuggets",
                "teamId": "9",
                "nickname": "Nuggets",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/3/35/Nuggets_de_Denver_2018.png/180px-Nuggets_de_Denver_2018.png",
                "shortName": "DEN",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Northwest"
                    }
                }
            },
            {
                "city": "Detroit",
                "fullName": "Detroit Pistons",
                "teamId": "10",
                "nickname": "Pistons",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Detroit_Pistons_primary_logo_2017.png/150px-Detroit_Pistons_primary_logo_2017.png",
                "shortName": "DET",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Central"
                    }
                }
            },
            {
                "city": "Golden State",
                "fullName": "Golden State Warriors",
                "teamId": "11",
                "nickname": "Warriors",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Warriors_de_Golden_State_logo.svg/1200px-Warriors_de_Golden_State_logo.svg.png",
                "shortName": "GSW",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Pacific"
                    }
                }
            },
            {
                "city": "Guangzhou",
                "fullName": "Guangzhou Long-Lions",
                "teamId": "12",
                "nickname": "Long-Lions",
                "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Guangzhou_Long-Lions_logo.png/220px-Guangzhou_Long-Lions_logo.png",
                "shortName": "GUA",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Haifa",
                "fullName": "Haifa Maccabi Haifa",
                "teamId": "13",
                "nickname": "Maccabi Haifa",
                "logo": "https://upload.wikimedia.org/wikipedia/en/4/4c/Maccabi_Haifa_B.C_logo.png",
                "shortName": "MAC",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Houston",
                "fullName": "Houston Rockets",
                "teamId": "14",
                "nickname": "Rockets",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/de/Houston_Rockets_logo_2003.png/330px-Houston_Rockets_logo_2003.png",
                "shortName": "HOU",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Southwest"
                    }
                }
            },
            {
                "city": "Indiana",
                "fullName": "Indiana Pacers",
                "teamId": "15",
                "nickname": "Pacers",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Pacers_de_l%27Indiana_logo.svg/1180px-Pacers_de_l%27Indiana_logo.svg.png",
                "shortName": "IND",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Central"
                    }
                }
            },
            {
                "city": "LA",
                "fullName": "LA Clippers",
                "teamId": "16",
                "nickname": "Clippers",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/d/d6/Los_Angeles_Clippers_logo_2010.png",
                "shortName": "LAC",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Pacific"
                    }
                }
            },
            {
                "city": "Los Angeles",
                "fullName": "Los Angeles Lakers",
                "teamId": "17",
                "nickname": "Lakers",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/220px-Los_Angeles_Lakers_logo.svg.png",
                "shortName": "LAL",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Pacific"
                    }
                }
            },
            {
                "city": "Melbourne",
                "fullName": "Melbourne United",
                "teamId": "18",
                "nickname": "United",
                "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Melbourne_United_logo.svg/220px-Melbourne_United_logo.svg.png",
                "shortName": "MEL",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Memphis",
                "fullName": "Memphis Grizzlies",
                "teamId": "19",
                "nickname": "Grizzlies",
                "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/1200px-Memphis_Grizzlies.svg.png",
                "shortName": "MEM",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Southwest"
                    }
                }
            },
            {
                "city": "Miami",
                "fullName": "Miami Heat",
                "teamId": "20",
                "nickname": "Heat",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1c/Miami_Heat_-_Logo.svg/1200px-Miami_Heat_-_Logo.svg.png",
                "shortName": "MIA",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Southeast"
                    }
                }
            },
            {
                "city": "Milwaukee",
                "fullName": "Milwaukee Bucks",
                "teamId": "21",
                "nickname": "Bucks",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/3/34/Bucks2015.png",
                "shortName": "MIL",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Central"
                    }
                }
            },
            {
                "city": "Minnesota",
                "fullName": "Minnesota Timberwolves",
                "teamId": "22",
                "nickname": "Timberwolves",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/d/d9/Timberwolves_du_Minnesota_logo_2017.png/200px-Timberwolves_du_Minnesota_logo_2017.png",
                "shortName": "MIN",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Northwest"
                    }
                }
            },
            {
                "city": "New Orleans",
                "fullName": "New Orleans Pelicans",
                "teamId": "23",
                "nickname": "Pelicans",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/New_Orleans_Pelicans.png/200px-New_Orleans_Pelicans.png",
                "shortName": "NOP",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Southwest"
                    }
                }
            },
            {
                "city": "New York",
                "fullName": "New York Knicks",
                "teamId": "24",
                "nickname": "Knicks",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/d/dc/NY_Knicks_Logo_2011.png",
                "shortName": "NYK",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Atlantic"
                    }
                }
            },
            {
                "city": "Oklahoma City",
                "fullName": "Oklahoma City Thunder",
                "teamId": "25",
                "nickname": "Thunder",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Thunder_d%27Oklahoma_City_logo.svg/1200px-Thunder_d%27Oklahoma_City_logo.svg.png",
                "shortName": "OKC",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Northwest"
                    }
                }
            },
            {
                "city": "Orlando",
                "fullName": "Orlando Magic",
                "teamId": "26",
                "nickname": "Magic",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/b/bd/Orlando_Magic_logo_2010.png",
                "shortName": "ORL",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Southeast"
                    }
                }
            },
            {
                "city": "Philadelphia",
                "fullName": "Philadelphia 76ers",
                "teamId": "27",
                "nickname": "76ers",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/4/48/76ers_2016.png",
                "shortName": "PHI",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Atlantic"
                    }
                }
            },
            {
                "city": "Phoenix",
                "fullName": "Phoenix Suns",
                "teamId": "28",
                "nickname": "Suns",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/5/56/Phoenix_Suns_2013.png",
                "shortName": "PHX",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Pacific"
                    }
                }
            },
            {
                "city": "Portland",
                "fullName": "Portland Trail Blazers",
                "teamId": "29",
                "nickname": "Trail Blazers",
                "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png",
                "shortName": "POR",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Northwest"
                    }
                }
            },
            {
                "city": "Sacramento",
                "fullName": "Sacramento Kings",
                "teamId": "30",
                "nickname": "Kings",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/9/95/Kings_de_Sacramento_logo.svg/1200px-Kings_de_Sacramento_logo.svg.png",
                "shortName": "SAC",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Pacific"
                    }
                }
            },
            {
                "city": "San Antonio",
                "fullName": "San Antonio Spurs",
                "teamId": "31",
                "nickname": "Spurs",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/0/0e/San_Antonio_Spurs_2018.png",
                "shortName": "SAS",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Southwest"
                    }
                }
            },
            {
                "city": "Shanghai",
                "fullName": "Shanghai Sharks",
                "teamId": "32",
                "nickname": "Sharks",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f3/Shangaisharks.jpg/130px-Shangaisharks.jpg",
                "shortName": "SDS",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Sydney",
                "fullName": "Sydney Kings",
                "teamId": "33",
                "nickname": "Kings",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/c/c4/Sydney_Kings.jpg/220px-Sydney_Kings.jpg",
                "shortName": "SYD",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Team",
                "fullName": "Team Team Durant",
                "teamId": "34",
                "nickname": "Team Durant",
                "logo": "",
                "shortName": "DRT",
                "allStar": "1",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "East"
                    }
                }
            },
            {
                "city": "Team",
                "fullName": "Team LeBron",
                "teamId": "35",
                "nickname": "Team LeBron",
                "logo": "",
                "shortName": "LBN",
                "allStar": "1",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "West"
                    }
                }
            },
            {
                "city": "Away",
                "fullName": "Away Team Wilbon",
                "teamId": "36",
                "nickname": "Team Wilbon",
                "logo": "",
                "shortName": "WLB",
                "allStar": "1",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "East"
                    }
                }
            },
            {
                "city": "Home",
                "fullName": "Home Team Stephen A",
                "teamId": "37",
                "nickname": "Team Stephen A",
                "logo": "",
                "shortName": "SAS",
                "allStar": "1",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "East"
                    }
                }
            },
            {
                "city": "Toronto",
                "fullName": "Toronto Raptors",
                "teamId": "38",
                "nickname": "Raptors",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/8/89/Raptors2015.png",
                "shortName": "TOR",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Atlantic"
                    }
                }
            },
            {
                "city": "USA",
                "fullName": "USA USA",
                "teamId": "39",
                "nickname": "USA",
                "logo": "",
                "shortName": "USA",
                "allStar": "1",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "East"
                    }
                }
            },
            {
                "city": "Utah",
                "fullName": "Utah Jazz",
                "teamId": "40",
                "nickname": "Jazz",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/3/3b/Jazz_de_l%27Utah_logo.png",
                "shortName": "UTA",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Northwest"
                    }
                }
            },
            {
                "city": "Washington",
                "fullName": "Washington Wizards",
                "teamId": "41",
                "nickname": "Wizards",
                "logo": "https://upload.wikimedia.org/wikipedia/fr/archive/d/d6/20161212034849%21Wizards2015.png",
                "shortName": "WAS",
                "allStar": "0",
                "nbaFranchise": "1",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "Southeast"
                    }
                }
            },
            {
                "city": "World",
                "fullName": "World World",
                "teamId": "42",
                "nickname": "World",
                "logo": "",
                "shortName": "WLD",
                "allStar": "1",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "East",
                        "divName": "East"
                    }
                }
            },
            {
                "city": "Bauru",
                "fullName": "",
                "teamId": "83",
                "nickname": "Paschoalotto/Bauru",
                "logo": "",
                "shortName": "BAU",
                "allStar": "",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Internatio",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Istanbul",
                "fullName": "",
                "teamId": "84",
                "nickname": "Fenerbahce Sports Club",
                "logo": "",
                "shortName": "FEN",
                "allStar": "",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Internatio",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Milano",
                "fullName": "",
                "teamId": "85",
                "nickname": "Olimpia Milano",
                "logo": "",
                "shortName": "MLN",
                "allStar": "",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Internatio",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Real Madrid",
                "fullName": "Real Madrid Real Madrid",
                "teamId": "86",
                "nickname": "Real Madrid",
                "logo": "",
                "shortName": "RMD",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Rio de Janeiro",
                "fullName": "Rio de Janeiro Flamengo",
                "teamId": "87",
                "nickname": "Flamengo",
                "logo": "",
                "shortName": "FLA",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Barcelona",
                "fullName": "Barcelona FC Barcelona",
                "teamId": "88",
                "nickname": "FC Barcelona",
                "logo": "",
                "shortName": "FCB",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Buenos Aires",
                "fullName": "Buenos Aires San Lorenzo",
                "teamId": "89",
                "nickname": "San Lorenzo",
                "logo": "",
                "shortName": "SLA",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Adelaide",
                "fullName": "Adelaide 36ers",
                "teamId": "90",
                "nickname": "36ers",
                "logo": "",
                "shortName": "ADL",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Beijing",
                "fullName": "Beijing Ducks",
                "teamId": "91",
                "nickname": "Ducks",
                "logo": "",
                "shortName": "BJD",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "New Zealand",
                "fullName": "New Zealand Breakers",
                "teamId": "92",
                "nickname": "Breakers",
                "logo": "",
                "shortName": "NZB",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Perth",
                "fullName": "Perth Wildcats",
                "teamId": "93",
                "nickname": "Wildcats",
                "logo": "",
                "shortName": "PER",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Franca",
                "fullName": "Franca Franca",
                "teamId": "99",
                "nickname": "Franca",
                "logo": "",
                "shortName": "FRA",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "Intl",
                        "divName": ""
                    }
                }
            },
            {
                "city": "Utah",
                "fullName": "Utah Blue",
                "teamId": "104",
                "nickname": "Jazz",
                "logo": "",
                "shortName": "UTB",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Northwest"
                    }
                }
            },
            {
                "city": "Utah",
                "fullName": "Utah White",
                "teamId": "105",
                "nickname": "Jazz",
                "logo": "",
                "shortName": "UTW",
                "allStar": "0",
                "nbaFranchise": "0",
                "leagues": {
                    "standard": {
                        "confName": "West",
                        "divName": "Northwest"
                    }
                }
            }
        ]
    }
}
// console.log(standings);
// });
    
function callAPINBA(pageLoc, cbFunction) {
    if (pageLoc == 'east' || pageLoc == 'west') {
        // get standings data
        if (!testing) {
            // can't filter by season so we get ALL games ever for the team
            requestPathNBA = '/standings/standard/2021';
        } else {
            responseNBA = standings;
        }
    } else if (pageLoc == 'teams') {
        if (!testing) {
            // can't filter by season so we get ALL players ever for the team
            requestPathNBA = '/teams/league/standard';
        } else {
            responseNBA = teams;
        }
    }

    var settingsNBA = {
        'async': true,
        'crossDomain': true,
        'url': 'https://' + requestlRootNBA + requestPathNBA,
        'method': "GET",
        'headers': {
            'x-rapidapi-host': requestlRootNBA,
            'x-rapidapi-key': apiKeyNBA
        }
    };

    if (!testing) {
        $.ajax(settingsNBA).done(function (responseNBA) {
            cbFunction(pageLoc, responseNBA);
        });
    } else {
        cbFunction(pageLoc, responseNBA);
    }
}

function renderStandingsNBA(pageLoc, dataNBA) {

    // clear the table contents
    standingsEl.children().remove();
    // get teams object saved on page load
    const jsonTeamsNBA = JSON.parse(localStorage.getItem('teams'));

    let lastRank = 0;
    let x = 0;
    // data isn't ordered in any way, so we must loop multiple times
    while (x < dataNBA.api.standings.length - 1) {
        for (var i = 0; i < dataNBA.api.standings.length; i++) {
            // data contains all leagues and all teams. we have filter for nba and 2 conferences
            if (dataNBA.api.standings[i].conference.name == pageLoc && dataNBA.api.standings[i].conference.rank == lastRank + 1) {
                // pageLoc is either east or west
                var tr = '<tr data-team-id="' + dataNBA.api.standings[i].teamId + '"><td>' + dataNBA.api.standings[i].conference.rank + '</td>';

                // now get team data 
                for (var y = 0; y < jsonTeamsNBA.api.teams.length; y++) {
                    if (dataNBA.api.standings[i].teamId == jsonTeamsNBA.api.teams[y].teamId) {
                        tr = tr + '<td><img class="image is-64x64" src="' + jsonTeamsNBA.api.teams[y].logo + '"></img></td>';
                        tr = tr + '<td>' + jsonTeamsNBA.api.teams[y].fullName + '</td>';
                        break;
                    }
                }
                tr = tr + '<td>' + dataNBA.api.standings[i].win + '-' + dataNBA.api.standings[i].loss +'</td>';
                tr = tr + '<td>' + dataNBA.api.standings[i].winPercentage +'</td>';
                tr = tr + '<td>' + dataNBA.api.standings[i].gamesBehind +'</td>';
                tr = tr + '<td>' + dataNBA.api.standings[i].conference.win +'-' + dataNBA.api.standings[i].conference.loss + '</td>';
                tr = tr + '<td>' + dataNBA.api.standings[i].division.win +'-' + dataNBA.api.standings[i].division.loss + '</td>';
                if (dataNBA.api.standings[i].winStreak == 1) {
                    tr = tr + '<td>W' + dataNBA.api.standings[i].streak +'</td>';
                } else {
                    tr = tr + '<td>L' + dataNBA.api.standings[i].streak +'</td>';
                }

                lastRank++;
                standingsEl.append(tr);
                break;
            }
        }
        x++;
    }
}

function saveTeams(pageLoc, jsonTeams) {
    localStorage.setItem('teams', JSON.stringify(jsonTeams));
}

// handlers with callback functions
function handleButtonStandings() {
    callAPINBA('east', renderStandingsNBA);
}

function handleButtonConference() {
    event.preventDefault();
    if (event.currentTarget.id == "easternStanding") {
        callAPINBA('east', renderStandingsNBA);
    } 
    else if (event.currentTarget.id == "westernStanding") {
        callAPINBA('west', renderStandingsNBA);
    }
}

$(document).ready(function() {
    if (!localStorage.getItem('teams')) {
        callAPINBA('teams', saveTeams);
    }
    handleButtonStandings();
    btnEasternStandingNBA.on('click', handleButtonConference);
    btnWesternStandingNBA.on('click', handleButtonConference);
});

