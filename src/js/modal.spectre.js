// Spectre Modal

Array.prototype.each = function(fn) {
	for(let i=0;i<this.length;i++) {
		fn(this[i],i,this)
	}
}

const oTriggers = [], cTriggers = []
const dataOpenModal = document.querySelectorAll('[data-open="modal"]')
const dataCloseModal = document.querySelectorAll('[data-close="modal"]')

for(let x=0;x<dataOpenModal.length;x++) {
	oTriggers.push(dataOpenModal[x])
}
for(let x=0;x<dataCloseModal.length;x++) {
	cTriggers.push(dataCloseModal[x])
}

oTriggers.each(function(el) {
	el.addEventListener('click',function(e) {
		e.preventDefault();
		let modalContainer = el.getAttribute('href')
		modalContainer = document.querySelector(`.modal${modalContainer}`)
		let modalClass = modalContainer.getAttribute('class')
		modalContainer.setAttribute('class',`${modalClass} active`)
	})
})

cTriggers.each(function(el) {
	el.addEventListener('click',function(e) {
		e.preventDefault();
		console.log('close click')
		let modalContainer = el.getAttribute('href')
		modalContainer = document.querySelector(`.modal${modalContainer}`)
		modalContainer.setAttribute('class',`modal`)
	})
})