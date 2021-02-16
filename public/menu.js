var menuBtn = document.querySelector('.arrow');
var menuBox = document.querySelector('.menu');

menuBtn.onclick = () => {
var menuBtn = document.querySelector('.arrow');
var menuBox = document.querySelector('.menu');

	menuBox.style.left = menuBox.style.left == '-250px' ? '0px' : '-250px';
	menuBtn.style.transform = menuBtn.style.transform == 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
}