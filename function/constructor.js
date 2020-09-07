/*
	Build 3 object in contructor
*/
function Kelas(nama, kelas){
	this.nama = nama
	this.kelas = kelas
	this.detail = function () {
		return this.nama + '' + this.kelas
	}
}

var kelas1 = new Kelas("Iqbal Nur Wicaksana", "XII TKJ"); console.log(kelas1)
var kelas2 = new Kelas("Ilyas", "XII TKJ"); console.log(kelas1)
var kelas3 = new Kelas("Ivan", "XII TKJ"); console.log(kelas1)

/*
	Class pada javascript
*/
class Buah {
	constructor(nama, price) {
	  this.nama = nama;
	  this.price = price
	}

	detail() {
		return this.nama + ' ' + this.price
	}
}

var buah1 = new Buah("Mangga", '20000'); console.log(buah1)