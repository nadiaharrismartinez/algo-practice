// MORE OPTIMIZED SOLUTION

/*
ST COMPLEXITY APPROACH:
- Hash tables
- Search Hash for winner


*/

function tournamentWinner(competitions, results) {
  let points = {};

  for (let i = 0; i < results.length; i++) {
    let homeTeam = competitions[i][0];
    let awayTeam = competitions[i][1];

    if (results[i] === 0) {
      if (points.hasOwnProperty(awayTeam)) {
        points[awayTeam] += 3;
      } else {
        points[awayTeam] = 3;
      }
    } else {
      if (points.hasOwnProperty(homeTeam)) {
        points[homeTeam] += 3;
      } else {
        points[homeTeam] = 3;
      }
    }
  }

  //Return team with most points
  console.log('Points Obj:', points);

  let scores = Object.values(points);
  console.log('Scores:', scores);

  let maxScore = Math.max(...scores);
  console.log('MaxScore:', maxScore);

  let winner = Object.keys(points).find((key) => points[key] === maxScore);
  console.log(winner);

  return winner;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
