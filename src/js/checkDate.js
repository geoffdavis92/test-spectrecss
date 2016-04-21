// checkDate
const compare = function(a,b) {
	let diffArr = [],
		months = (b[0] - a[0]) <= 1 && (b[1] - a[1]) <= 0 ? 0 : (b[1] < a[1]) ? (b[0] - a[0] - 1) : (b[0] - a[0]),
		days = (b[1]) + (30 - a[1])
	if(a[0] === b[0] && a[1] > b[1]) {
		return 366
	} else {
		return (30 * months) + days
	}
}
const today = function() {
	let d = new Date()
	return [d.getMonth(),d.getDate()]
}
const weddingArr = []
const weddings = document.querySelectorAll('[data-wedding-name]')
let diff = {id:'',length:365}

for(let item=0;item<weddings.length;item++) {
	let _ = weddings[item]
	if(_.getAttribute) {
		let date = new Date(_.getAttribute('data-wedding-date'))
		let attend = _.getAttribute('data-wedding-attendance') === 'yes' ? true : false
		date = [date.getMonth(),date.getDate()]
		let difference = compare(today(),date)
		if(diff.length > difference && attend) {
			diff['length'] = difference
			diff['id'] = _.getAttribute('data-wedding-name')
			_.setAttribute('class','selected')
		}
	}
}