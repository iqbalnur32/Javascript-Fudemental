let countries = [
    ['Japan', 'South Korea', 'Indonesia'], // countries[0]
    ['Canada', 'Meksiko', 'Argentina'], // countries[1]
    ['Italy', 'Spain', 'Sweden', 'Croatia'] // countries[2]
]

/**
 * 2. Tampilkan dalam sebuah array Negara yang namanya diawali dengan huruf 'I'
 *    ['South Korea', 'Spain', 'Sweden']
 */

function findCountry(list, character) {
    if (list.length === 0) {
        return 'Invalid Data'
    }
    
    let output = []
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].length; j++) {
            let currentCountry = list[i][j]
            if (currentCountry[0] === character) {
                output.push(currentCountry)
            }
        }
    }
    return output
}

let result = findCountry(countries, 'S')
console.log(result) // ['South Korea', 'Spain', 'Sweden']
console.log(findCountry([], 'I')) // Invalid Data