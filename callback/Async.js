const firtPromise = () => (new Promise((resolve, rejected) => {
	setTimeout(() => {resolve(console.log('Ini Promise Pertama'))}, 1000)
}))  

const secondPromise = () => (new Promise((resolve, rejected) => {
	setTimeout(() => {resolve(console.log('Ini Promise Kedua'))}, 1000)
}))  

async function asncPararel() {
	let a = firtPromise()
	let b = secondPromise()
}


async function asyncSerial() {
	let a = await firtPromise()
	let b = await secondPromise()
}

asncPararel()
.then(() => {
	console.log("Selesai async pararel");
})

asyncSerial()
.then(() => {
	console.log("Selesai async serial");
})