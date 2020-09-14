let negara = [
    ['Japan', 'South Korea', 'Indonesia'], // countries[0]
    ['Canada', 'Meksiko', 'Argentina', 'Manilla'], // countries[1]
    ['Italy', 'Spain', 'Sweden', 'Croatia'] // countries[2]
]

// Access Array Berdasarkan Indexing
console.log(negara[0]) // access index  0
console.log(negara[1]) // access index  1
console.log(negara[2]) // access index  2
console.log(negara[0][1][0]) // access index  0; access array 1; dan access index di dalam array 0

// Mencari Negara Yang Huruf Depannya M
let count = 0;
for(let i = 0; i < negara.length; i++){
	for(let j = 0; j < negara[i].length; j++){
		if (negara[i][j][0] === 'M') {
			console.log(negara[i][j])
			count++
		}
	}
}
console.log(count)
