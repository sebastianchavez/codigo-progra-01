var variable1
let var2
const const1 = 1

/** 
 * tipos datos
*/

// string
let text = ""
// number
let num = 0
// boolean
let bool = true
// object
let obj = {
    name: 'Diego',
    params: {
        asd: () => { }
    }
}
// obj.params.asd
let arr = ['txt 1', 'txt 2']
let arr2 = [{
    name: 'Diego',
    params: {
        asd: () => { }
    }
},
{
    name: 'Damian',
    params: {
        asd: () => { }
    }
}
]

let matr = [[],[],[]]

// palabraUno // Camelcase
// PalabraDos // Pascalcase

// EcmaScript 
function funcOne() {

}

const funcTwo = () => {

}

const obj2 = {}

obj2.key1 = () => {

}

// Condiciones

if(1 == 1){

} else if(1 == 2) {

} else {

}

let param1
switch(param1){
    case 1:
        console.log(param1)
        break
    case 2:
        console.log(param1)
        break
    default:
        console.log(param1)
        break
}

// Ciclos

let array = [1,2,3]
for (let i = 0; i < array.length; i++) {
    let element = array[i]    
}

array.forEach((x, i) => {

})

array.map(x =>{
    return x == 1
}) // [1]

let a = 0
while(a < 5){
    a++
}

const sum = (a, b) => {
    console.log(a+parseFloat(b))
}

const valuesTrue = () => {
    let array1 = [1,2,3,4,5]
    console.log(array1.map(x => x == 2))
    array1.push(6)
    console.log(array1)
    array1.splice(2, 1)
    console.log(array1)
    array1.forEach(x => {
        console.log(x)
    })
    document.getElementById('val1').innerHTML = array1
    if(array1.length == 6){
        console.log('El largo es de ' + array1.length)
    } else {
        console.log(`El largo es de ${array1.length}`)
    }

    switch(array1.length){
        case 1:
            console.log(array1)
            break
        default:
            console.log('default')
            break
    }
}

const orderArray = () => {
    let array2 = [1,3,6,2,7,4]
    let arr = array2.sort((a, b) => b-a)
    console.log(arr)
    let array3 = [1,1,1,1,2,2,3,3,3,4,4,4,4,5]
    console.log(array3)
    array3 = new Set(array3)
    console.log([...array3])    
}

const objFunct = () => {
    let obj = {
        name: 'Diego',
        age: 24,
        genre: 'Male'
    }
    console.log(obj.name)
    const { name, age, genre } = obj
    console.log({name, age, genre})
}