// {
//     let participant = "Dean 1"
//     var participantNew = "Dean 2"
// }
// console.log(participantNew)
// console.log(participant)


// STRUKTUR REACT
// function Button (){
//     let name = 'Submit' // state
//     // const name = 'Submit' // state
//     console.log("Nama awal adalah "+name)
//     function changeName () {
//         name = 'Send'
//         type = 5
//         return type
//     }
//     changeName()
//     console.log("Nama yang telah diubah adalah "+name)
//     return 'done'
// }

// Button()

// RESERVED WORD
// let break = 1

// // SPECIAL PRIMITIVE + TRUTHY + FALSY
// const value = null
// console.log(typeof value)
// console.log(value)
// console.log(!value)

// FALSY => [null, 0, '', false, undefined]

// console.log(!NaN) // truthy
// console.log(!!NaN) // falsy // !! => double bang

// backtick => template literal
`
Saya pergi ke pasar
`

// '
// Saya pergi ke pasar
// '

// function Button (){
//     let value = 1
//     const name  = 'Submit'
//     return `${name} - ${value}`
// }
// // console.log(Button())
// test = `
// Ini testing
// (ini spasi)
// `
// console.log(test)

// ARRAY
// let numbers = [1,2,3,4,5]
// numbers.push(6) // index paling belakang
// numbers.unshift(6) // index paling depan
// console.log(numbers)

// 1,2,3,4,5                    => array angka
// 'Dean1', 'Dean2', 'Dean3'    => array string (nama)
// [{name: 'Dean'}]              => array of objects

// // MULTI DIMENSI ARRAY
// let otherNumbers = [
//     [
//         [0, 1],
//         2,
//         3
//     ],
//     [4,5],
//     [6,7,8,9]
// ]

// console.log(otherNumbers[0][0])
// console.log(otherNumbers[0][0][0])
// console.log(otherNumbers[0][0][1])
// console.log(otherNumbers[0][1])
// console.log(otherNumbers[0][2])
// console.log(otherNumbers[1])
// console.log(otherNumbers[1][0])
// console.log(otherNumbers[1][1])
// console.log(otherNumbers[2])
// console.log(otherNumbers[2][0])
// console.log(otherNumbers[2][1])

// // THIS
// const counter = {
//     val: 0,
//     increment(){
//         this.val += 1 // this => refer to counter (parent object)
//     }
// }
// console.log(counter)
// counter.increment()
// console.log(counter)

// // This in console
// console.log(this)

// // ARROW FUNCTION
// function sum (a,b){
//     return a+b
// }

// const sumArrow = (a,b) => a+b // implicit return
// console.log(sumArrow(10,20))

// // THIS again
// const thisArrow = () => this
// // const thisFunction = function (){
// //     return this
// // }
// // console.log(thisFunction())
// this.value = 1
// console.log(this)
// console.log(thisArrow())

// CLASS
class Participant{ // blueprint
    constructor(name){
        this.name = name
    }
}

// console.log(new Participant('Dean'))
// console.log(new Participant('Dean').name)

const dean = new Participant('Dean')
const ainun = new Participant('Ainun')

// console.log({
//     dean,
//     ainun
// })

console.log(`Halo! Nama saya ${dean.name} dan saya sayang banget sama ${ainun.name}`)
