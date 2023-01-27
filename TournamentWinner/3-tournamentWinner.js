// OPTIMIZED SPACE & TIME COMPLEXITY SOLUTION

function tournamentWinner(competitions, results) {
  let lead = { name: '', score: 0 };
  let points = {};

  for (let i = 0; i < results.length; i++) {
    let homeTeam = competitions[i][0];
    let awayTeam = competitions[i][1];
    let winner = '';

    if (results[i] === 0) {
      winner = awayTeam;
      if (points.hasOwnProperty(awayTeam)) {
        points[awayTeam] += 3;
      } else {
        points[awayTeam] = 3;
      }
    } else {
      winner = homeTeam;
      if (points.hasOwnProperty(homeTeam)) {
        points[homeTeam] += 3;
      } else {
        points[homeTeam] = 3;
      }
    }

    if (points[winner] > lead.score) {
      lead.name = winner;
      lead.score = points[winner];
    }
  }
  return lead.name;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
