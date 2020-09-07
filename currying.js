/*Tanpa currying*/
const getSalePrice = (discount, price) => 
	price - ((parseInt(discount.match(/\d+/)) / 100) * price)

// jika ingin menambahkan price kita membuat data lagi sampe sterusnya
const price1 = getSalePrice('50%', 10000)
const price2= getSalePrice('50%', 5000)
const price3 = getSalePrice('50%', 75000)
console.log('Tanpa Metode Currying ' + price3)

/*Menggunkan currying*/ 
const getSale = discount => price => 
	price - ((parseInt(discount.match(/\d+/)) / 100) * price)

// get data dari GetSale dengan metode currying
const discount = getSale('50%')

// Data di dicount akan di tampung di dalam array
const arr = [discount(92000), discount(7000), discount(2000)]
console.log('Menggunkan metode Currying ' + arr)
