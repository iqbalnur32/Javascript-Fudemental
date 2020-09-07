const nama = ['iqbal', 'rizky', 'brebes', 'tipah']

// Map
const getName = nama.map(function(result){
	return "Hai " + result
})
console.log(getName);

// Filter
const getNameTipah = nama.filter(function(result) {
	return result.length === 5
})
console.log(getNameTipah)

// Reduce
const getReduce = nama.reduce(function(acc, value, index) {
	if (index == 0) {
		acc += 'Hai ' + value
	}else{
		acc += ', ' + value
	}

	return acc
}) 
console.log(getReduce)

// Reduce Loop
const namaReduce = [['iqbal','nur'], ['akbar', 'rizky']]
const getAll = namaReduce
.map(namaReduce => namaReduce[0] + ' ' + namaReduce[1])
.reduce(function(acc, value, index) {
	if (index === 0) {
		acc += 'Hai ' + value
	}else{
		acc += ', ' + value
	}
	return acc
}, '')
console.log(getAll)