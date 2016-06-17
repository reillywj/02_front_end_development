var location1 = Math.floor(Math.random() * 5),
    location2 = location1 + 1,
    location3 = location2 + 1,
    guess,
    hits = 0,
    guesses = 0,
    is_sunk = false

while (is_sunk === false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");

  if (guess < 0 || guess > 6)  {
    alert("Please enter a valid cell number!");
  } else {
    guesses += 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits += 1;
      alert("HIT!");
    } else {
      alert("MISS.");
    }
  }
  console.log("Guess: " + guess);
  if (hits == 3) {
    is_sunk = true;
    alert("You sunk my Battleship!");
  }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " + " which means your shooting accuracy was " + (3/guesses * 100) +"%.";
alert(stats);
console.log("Guesses: " + guesses);
console.log("Hits: " + hits);
console.log(String(is_sunk));