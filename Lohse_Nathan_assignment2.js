/*Nathan Lohse
9/12/2013
x-COM: Iron Man*/
alert("Hello!"); 
var fight = false;
var assaultLives = false;
var assaultName = "Frankie";
var commanderName = "Jax";
var squaddies = 5;
var aim = 0;

var sniperShot = function(aimRating) //Procedure
{
	if(aimRating < 65)
	{
		console.log("Oh no, the sniper misses his shot!");
	}
	else
	{
		console.log("The sniper makes his kill!  Good shot!");
	}
}

var combat = function (fightOrFlight, squaddies) //Boolean Function
{
	var i = 0;
	while(i < squaddies)
	{
		if(fightOrFlight === true)
		{
			console.log("Squaddie number " + (i+1) + " fires their weapon at the alien menace!");
		}
		else
		{
			console.log("Your troops flee the battle!");
			return false;
		}
		i++;
	}
	return true;

}
var bulletsFired = function (squaddies) //Number Function
{
	var shotsPerGuy = 12;
	for(var i = 0; i < squaddies; i++)
	{
		console.log("The average number of shots fired on this sort of mission with " + (i+1) + " soldiers is " + (shotsPerGuy * (i+1)) + ".");
	}

	return(shotsPerGuy * squaddies);


}

var fallenNames = function(commanderName, assaultName) //String Function
{

}


aim = prompt("What is the aim rating of your sniper? (1-100)");
sniperShot(aim);
fight = confirm("Do we run or do we fight, sir?");
console.log(fight);
fight = combat(fight, squaddies);
bulletsFired(squaddies);






