/*Nathan Lohse
9/12/2013
x-COM: Iron Man*/
alert("Hello!"); 
var sniperKill = false;
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

var assaultCharge = function (chargeOrShoot, sniperKill) //Boolean Function
{

}

var fallenNames = function(commanderName, assaultName) //String Function
{

}

var survivingSquad = function (squaddies, assaultLives) //Number Function
{

}

aim = prompt("What is the aim rating of your sniper? (1-100)");
sniperShot(aim);


