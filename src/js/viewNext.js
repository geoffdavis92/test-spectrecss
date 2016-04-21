// View next wedding in modal

const viewNext = document.querySelector('#viewNext')
const nextWed = document.querySelector('tr.selected[data-wedding-name]')
const dataset = nextWed.dataset

for(let item in dataset) {
	console.log(`${item}: ${dataset[item]}`)
	let prop = item.replace('wedding','').toLowerCase()
	let	el = document.querySelector(`.modal#viewNext span.wedding#${prop}`)
	if (prop === 'couple') {
		let couple = JSON.parse(dataset[item])
		el.innerText = `${couple[0]} and ${couple[1]}`
	} else if (prop === 'attendance') {
		let str = dataset[item] === 'yes' ? 'attending' : 'not attending'
		el.innerText = str
	} else if (prop === 'role') {
		if (dataset[item] !== 'no') {
			let str = dataset[item][0].toLowerCase().search(/a|e|i|o|u/) === 0 ? `an ${dataset[item]}` : `a ${dataset[item]}`
			el.innerText = str
		} else {
			el = document.querySelector(`p#${prop}p`)
			el.setAttribute('class','hide')
		}
	} else {
		el.innerText = dataset[item]
	}
}