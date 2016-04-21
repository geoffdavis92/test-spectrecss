// checkDate
const compare = function(a,b) {
	let diffArr = []
	// if(typeof a === 'array' && typeof b === 'array') {
		for(let i=0;i<2;i++) {
			diffArr.push(a[i] - b[i] > 0 ? a[i] - b[i] : -1 * (a[i] - b[1]))
		}
		if(diffArr < diff) {
			return diff = diffArr
		}
	// } else {
		// console.error('both arguments must be Arrays')
		// return false
	// }
}
const today = function() {
	let d = new Date()
	return [d.getMonth(),d.getDate()]
}
const weddingArr = []
const weddings = document.querySelectorAll('[data-wedding]')
let diff = today()

for(let item=0;item<weddings.length;item++) {
	let _ = weddings[item]
	if(_.getAttribute) {
		// weddingArr.push(_.getAttribute('data-wedding-date'))
		let date = new Date(_.getAttribute('data-wedding-date'))
		date = [date.getMonth(),date.getDate()]
		console.log(today(),date)
		compare(today(),date)
	}
}