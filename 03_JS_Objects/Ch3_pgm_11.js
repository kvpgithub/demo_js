// Using a property in a calculation

var player1;

player1 = {
	  name: "Max",
	  score: 0
};

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score + 50;

console.log(player1.name + " has scored " + player1.score);

player1.score = player1.score * 1.10;
console.log(player1.name + " has scored " + player1.score);

var player2;

player2 = {
	name: "jhon",
	score: 44
};
console.log(player2.name + " has scored " + player2.score);

var totalscore = player1.score + player2.score;
console.log("the sum of their scores " + totalscore );



/* Further Adventures
 *
 * 1) Write code to increase player1's score by 10%.
 *
 * 2) Add a second player.
 *
 * 3) Use the players' properties to find the sum
 *    of their scores and log it to the console,
 *    along with an appropriate message that includes
 *    their names.
 *
 */