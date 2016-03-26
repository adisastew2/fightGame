var attackArray = [10,15,20,10,15,10,10,10]

// my basic attack function
function baseAttack() {
	// access and decrement health
	var health = document.getElementById('health2')
	health.innerHTML-=attackArray[Math.floor(Math.random()*attackArray.length)]

	// wobble effect
	var antImg = document.getElementById('antImg')
	antImg.className += " wobble"
	
	// calls youWin when health is out
	if(health.innerHTML<=0){
	youWin()
	return
	}

	// calls counter attack function
	setTimeout(counterAtt, 1000)
	
}

// antagonist attack
function counterAtt() {
	// access and decrement health
	var health = document.getElementById('health1')
	health.innerHTML-=attackArray[Math.floor(Math.random()*attackArray.length)]

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
 





