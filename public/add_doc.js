var addDocBox = document.querySelector('.addDocBox')
var fields = document.querySelector('.fields')
var form = document.querySelector('form')

function closeBoxAddDoc () {
	addDocBox.style.display = "none"
}

// Add document box = show
function addDoc () {
	addDocBox.style.display = "inherit"
}

// Add document box = add field
function addField () {
	fields.innerHTML += '<li><h4>New field:</h4><input type="text"></li>'
}

form.onsubmit = () => {
	console.log(this)
}