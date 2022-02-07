'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


// 1 ___________________________________________________________________

let[ players1, players2] = game.players;


console.log(players1);
console.log(players2);

// 2 ___________________________________________________________________

let [ gk, ...fieldPlayers ] = players1;

console.log(gk);
console.log(fieldPlayers);

// 3 ___________________________________________________________________

let allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4 ___________________________________________________________________

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5 ___________________________________________________________________

let {odds: {team1, x:draw, team2}} = game;

console.log(team1, draw, team2);

// 6 ___________________________________________________________________

function printGoals (...players) {

  let obj = {};

  players.forEach(player => {    

    if (obj[player]) { obj[player] += 1 } 
    else { obj[player] = 1 }

  });

  Object.keys(obj).forEach(key => {
    console.log(key,  obj[key]);
  });

}

printGoals(...game.scored);

// 7 ___________________________________________________________________

team1 < team2  && console.log('Team 1 is more likely to win');
team1 > team2  && console.log('Team 2 is more likely to win');