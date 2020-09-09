// Considerations
// Speed Limit = 70
// Every 5 over limit +1 point
// If >= 12 points -> suspended

checkSpeed(30);
checkSpeed(70);
checkSpeed(74);
checkSpeed(75);
checkSpeed(129);
checkSpeed(130);

function checkSpeed(speed) {
  const LIMIT = 70,
    THRESHOLD = 5;

  let points = 0;
  if (speed >= 70) {
    points += Math.floor((speed - LIMIT) / THRESHOLD);
  }

  const speedPrint = 'Speed: ' + speed + '\t-> ';
  if (points == 0) {
    console.log(speedPrint + 'Ok');
  } else if (points >= 12) {
    console.log(speedPrint + 'License suspended');
  } else {
    console.log(speedPrint + points + ' points');
  }
}
