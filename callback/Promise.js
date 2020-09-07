const fetch = require("node-fetch");

Promise All
const getPost = () => fetch('https://jsonplaceholder.typicode.com/posts/1')
const getUsers = (id) => fetch('https://jsonplaceholder.typicode.com/users/' + id)

var a = getPost().then(res => res.json());
var b = a.then(res => getUsers(res.id)).then(res => res.json());

Promise.all([a, b]).then(result => {
	console.log(result[0])
	console.log(result[1])
})

// Promise Loop
const doFetch = (url) => fetch(url).then(result => result.json())

let url = [
	'https://jsonplaceholder.typicode.com/posts/1',
	'https://jsonplaceholder.typicode.com/posts/2',
	'https://jsonplaceholder.typicode.com/posts/3',
	'https://jsonplaceholder.typicode.com/posts/4',
]
let urls = []

url.map((url) => {
	urls.push(doFetch(url))
})

Promise.all(urls).then(result => console.log(result))

// Promise Race
let peserta1 = new Promise(resolve => setTimeout(resolve, 20, 'Peserta 1'))
let peserta2 = new Promise(resolve => setTimeout(resolve, 30, 'Peserta 2'))
let peserta3 = new Promise(resolve => setTimeout(resolve, 10, 'Peserta 3'))

Promise.race([peserta1, peserta2, peserta3])
.then(result => {
	console.log('Lomba lari juara ' + result)
})
.catch(err => console.log(err))