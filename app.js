/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game





/*collect scores,round score,current active player,

dice random variable(1-6)

change in current round score,
reset total to 0 initially and hide dice

create a callback and anonymous function
also set an event handler for rolling the dice
and switching it if dice=1 using a ternary operator

change bg image too


study and understand atleast 7 events
*/

var scores,round,c_act;
domdice=document.querySelector('.dice');

function init(){

	scores=[0,0];
	scores=[0,0];
	scores=[0,0];
	round=0;
	c_act=0;
	var x=document.querySelectorAll('.player-current-score');
	x.forEach(i=>i.textContent=0);
	var y=document.querySelectorAll('.player-score');
	y.forEach(i=>i.textContent=0);
	domdice.style.visibility = "hidden";
	document.querySelector('.btn-roll').style.visibility = "visible";
	document.querySelector('.btn-hold').style.visibility = "visible";
	
	document.querySelector('#name-0').textContent='Player 1';
	document.querySelector('#name-1').textContent='Player 2';

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');



}

init();








document.querySelector('.btn-roll').addEventListener('click',function(){

	var dice=Math.ceil(Math.random()*6);
	
	
	domdice.src="dice-"+dice+'.png';
	domdice.style.visibility = "visible";

	
	if(dice!=1)
	{
	round+=dice;

	document.querySelector('#current-'+c_act).textContent=round;
	
		//add to round score
		//unhide
	}
	else{
		
		shift();
		document.querySelector('.dice').style.visibility = "hidden";

		//hide image
		//reset scores to zero
		//change active player
	}
});
	

/*old button
{
	reset round score
	change active player
	add total score

}*/
document.querySelector('.btn-hold').addEventListener('click',function(){
	scores[c_act]+=round;
	document.querySelector('#score-'+c_act).textContent=scores[c_act];
	if(scores[c_act]>=50){
		document.querySelector('#name-'+c_act).textContent="WINNER!!";
		document.querySelector('.dice').style.visibility = "hidden";
		document.querySelector('.player-'+c_act+'-panel').classList.remove('active');
		document.querySelector('.player-'+c_act+'-panel').classList.add('winner');
		document.querySelector('.btn-roll').style.visibility = "hidden";
		document.querySelector('.btn-hold').style.visibility = "hidden";
	}
	else{
	shift();
	round=0;
	}
	

});

function shift(){
	round=0;
	console.log(c_act);
	document.querySelector('#current-'+c_act).textContent=0;
	c_act===0? c_act=1:c_act=0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}

//check for winner and change font of winner

//disable roll dice after winning

//implement new game option

document.querySelector('.btn-new').addEventListener('click',init);