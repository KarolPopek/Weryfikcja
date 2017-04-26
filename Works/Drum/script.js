
function removeTransition(e) 
{
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
 }

 function playSound(e) 
 {	
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
	if (!audio) return;
	
	key.classList.add('playing');
	audio.currentTime = 0; 
	audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

var A = document.getElementById('A');
var B = document.getElementById('S');
var D = document.getElementById('D');
var F = document.getElementById('F');
var G = document.getElementById('G');
var H = document.getElementById('H');
var J = document.getElementById('J');
var K = document.getElementById('K');
var L = document.getElementById('L');

A.addEventListener("mouseover", function()
{	
	var clap = new Audio("sounds/clap.wav");
	A.classList.add('playing');
	clap.currentTime = 0; 
	clap.play();
});

B.addEventListener("mouseover", function()
{
	var hihat = new Audio("sounds/hihat.wav");
	B.classList.add('playing');
	hihat.currentTime = 0; 
	hihat.play();
});

D.addEventListener("mouseover", function()
{	
	var kick = new Audio("sounds/kick.wav");
	D.classList.add('playing');
	kick.currentTime = 0; 
	kick.play();
});

F.addEventListener("mouseover", function()
{	
	var openhat = new Audio("sounds/openhat.wav");
	F.classList.add('playing');
	openhat.currentTime = 0; 
	openhat.play();
});

G.addEventListener("mouseover", function()
{	
	var boom = new Audio("sounds/boom.wav");
	G.classList.add('playing');
	boom.currentTime = 0; 
	boom.play();
});

H.addEventListener("mouseover", function()
{	
	var ride = new Audio("sounds/ride.wav");
	H.classList.add('playing');
	ride.currentTime = 0; 
	ride.play();
});

J.addEventListener("mouseover", function()
{	
	var snire = new Audio("sounds/snare.wav");
	J.classList.add('playing');
	snare.currentTime = 0; 
	snare.play();
});

K.addEventListener("mouseover", function()
{	
	var tom = new Audio("sounds/tom.wav");
	K.classList.add('playing');
	tom.currentTime = 0; 
	tom.play();
});

L.addEventListener("mouseover", function()
{	
	var tink = new Audio("sounds/tink.wav");
	L.classList.add('playing');
	tink.currentTime = 0; 
	tink.play();
});
