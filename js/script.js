var attackArray = [10,15,20,10,15,10,10,10]
var tauntArray = ["That felt like triple ply toilet paper... Baby soft","You need emotional content","You must be a massage therapist. Can I have your card?","Pathetic","Nice try, but I'm pretty sure being unimpressed can't kill someone!","Maybe this isn't for you. Try hopscotch","Wow, you're terrble","Oh I get it, you're trying to kill me with kindness","What's that smell?","That technique! But then you must be...Elmer Fudd!"]

// my basic attack function
function baseAttack() {
	// access and decrement health
	var health = document.getElementById('health2')
	health.innerHTML-=attackArray[Math.floor(Math.random()*attackArray.length)]

	// wobble effect
	var antImg = document.getElementById('antImg')
	antImg.className += " wobble"

	// remove effect from opponent
	var antImg = document.getElementById('protImg')
	antImg.classList.remove("wobble")
	
	// calls youWin when health is out
	if(health.innerHTML<=0){
	youWin()
	return
	}

	// calls counter attack function
	setTimeout(counterAtt, 1000)

	// adds taunts from enemy
	var taunt = document.getElementById("taunt")
	taunt.innerHTML = tauntArray[Math.floor(Math.random()*tauntArray.length)]
	
}

// antagonist attack
function counterAtt() {
	// access and decrement health
	var health = document.getElementById('health1')
	health.innerHTML-=attackArray[Math.floor(Math.random()*attackArray.length)]

	// wobble effect
	var antImg = document.getElementById('protImg')
	antImg.className += " wobble"

	// remove effect from opponent
	var antImg = document.getElementById('antImg')
	antImg.classList.remove("wobble")


	// calls youLose when health is out
	if(health.innerHTML<=0){
	youLose()
	}
}


// ends game when player1 wins
function youWin() {
	// change title
	var title = document.getElementById('title')
	title.innerHTML="You Win!"

	// hide opponent health
	var health = document.getElementById('health2')
	health.style.display='none'

}

// ends game when player2 wins
function youLose() {
	// change title
	var title = document.getElementById('title')
	title.innerHTML="You Lose!"

	// hide opponent health
	var health = document.getElementById('health1')
	health.style.display='none'

}
 





