const outputColor = document.querySelector('#output-color span')
const output = document.querySelector('#output')
const genBtn = document.querySelector('#gen-btn')
const copyBtn = document.querySelector('#copy-btn')
const alertEl = document.querySelector('.alert')

window.onload = genHexCode

function genHexCode() {
	let hexCode = '#'

	for (i = 0; i < 6; i++) {
		hexCode += Math.floor(Math.random() * 16).toString(16)
	}

	output.value = hexCode

	outputColor.classList.remove('show-color')
	setTimeout(() => outputColor.classList.add('show-color'), 10)
	outputColor.style.backgroundColor = hexCode
}

function copyToClipboard() {
	navigator.clipboard.writeText(output.value)
	copyAlert()
}

function copyAlert() {
	alertEl.classList.add('show')
	setTimeout(() => alertEl.classList.remove('show'), 2000)
}

genBtn.addEventListener('click', genHexCode)
copyBtn.addEventListener('click', copyToClipboard)
