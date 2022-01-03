// // PROMISE



function buatJanji(message){
    return new Promise((resolve,reject)=>{ // Parameter 2 => berhasil dan rejected
        if(message==='') return reject('Isi janji harus diisi')
        return resolve('Janji berhasil ditepati')
    })
}
// a = ''
// console.log(buatJanji(a))
buatJanji('Ke pantai yuk')
.then(result=>{
    console.log("Then pertama "+result)
})
.then(result=>{
    console.log("Then kedua "+result)
})
.catch(error=>{
    console.log(error)
})


// const axios = require('axios')
// function ambilData(){
//     return new Promise((resolve, reject)=>{
//         axios
//         .get('http://jsonplaceholder.typicode.com/todos')
//         .then(result=>{
//             resolve(result)
//         })
//         .catch(error=>{
//             reject(error)
//         })
//     })
// }
// ambilData()
// .then(result=>{
//     console.log("Then pertama "+result)
// })
// .then(result=>{
//     console.log("Then kedua "+result)
// })
// .catch(error=>{
//     console.log(error)
// })
// console.log(ambilData())

