// BRUTE FORCE SOLUTION

/*
EDGE CASES:
- No ties
- Team w/ most points win
- 1 competition input
- If results[i] is not 0 or 1, null

BRUTE FORCE APPROACH:
- Loop through results
- Determine winners
  - Use idx of Results to find idx of competition to get team name and assign points
- Assign points to ea team (team inside obj/hash table)
- Loop through obj to find the highest point team

ST COMPLEXITY APPROACH:
- Hash tables
- Stack

*/

function tournamentWinner(competitions, results) {
  let points = {};

  for (let i = 0; i < results.length; i++) {
    let homeTeam = competitions[i][0];
    let awayTeam = competitions[i][1];

    if (results[i] === 0) {
      if (points.hasOwnProperty(homeTeam) && points.hasOwnProperty(awayTeam)) {
        points[awayTeam] += 3;
      } else if (
        !points.hasOwnProperty(homeTeam) &&
        points.hasOwnProperty(awayTeam)
      ) {
        points[awayTeam] = 3;
        points[homeTeam] = 0;
      } else if (points.hasOwnProperty(homeTeam)) {
        points[awayTeam] = 3;
      } else {
        points[homeTeam] = 0;
      }
    } else {
      if (points.hasOwnProperty(homeTeam) && points.hasOwnProperty(awayTeam)) {
        points[homeTeam] += 3;
      } else if (
        !points.hasOwnProperty(homeTeam) &&
        points.hasOwnProperty(awayTeam)
      ) {
        points[awayTeam] = 0;
        points[homeTeam] = 3;
      } else if (points.hasOwnProperty(homeTeam)) {
        points[awayTeam] = 0;
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
