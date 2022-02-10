# Orlando Magic Fan Hub

## Description

For this group project, we created a fan page for the Orlando Magic. We built a site that fans can visit to stay up to date with their favorite team. Users can view scores from the most recent games, check when the team is playing next, review current league standings, and browse and search the latest team news.

This project incorporates several technologies and resources. We call upon NBA-API for game and season data to display our scores, schedule, and standings, and use the NewsCatcher API to supply our news. We use jQuery's powerful JavaScript code library to write concise code, and use Moment.js to format dates for scores and schedule. Team logos were cumbersome to call every time, so we cached them in local storage to quicken load times. Lastly, we styled our page using Bulma's CSS code library.

We faced several challenges while building this project. Even with ample documentation, navigating a new CSS library can be troublesome. Who knew "columns" means rows! Understanding how to interact with our APIs proved difficult at first, but the Insomnia desktop application provided us the precise code to make our calls. Because the NBA-API makes cross-origin requests, we had to use XML to enable the required Cross-Origin Resource Sharing (CORS). We also wanted to craft a players section but found that the NBA-API did not filter current players and instead included all players that have played in the last decade. This exemplifies that we are sometimes restricted by the available data.

Going forward with this project, we would like to add a players section that displays photos, statistics, personal infomration, and links to their social media accounts. We are also keen to extend this site to cover all NBA teams, and even expand into other popular sports leagues.

### Links

[Orlando Magic Fan Hub](https://admakinh.github.io/magic-fan-dashboard/)

[Screenshot](./assets/images/screenshot-1.png)

#### Credits

[NBA-API](https://rapidapi.com/api-sports/api/api-nba)

[NewsCatcher](https://newscatcherapi.com/)

Collaborators:

[Andrew Maki](https://github.com/admakinh)

[Don Murphy](https://github.com/dpmurphy11)

[Peter Cragnoline](https://github.com/pcragnol)

[Prathibha](https://github.com/PROGRAMER122223)
