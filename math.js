function divide2(decnumber) {
    let rem,
    remstack = []
    while (decnumber>0) {
        rem = decnumber % 8
        remstack.push(rem)
        decnumber = Math.floor(decnumber / 8)
    }
    let binaryString = remstack.reverse().join('')
    
    return binaryString
}

// console.log(divide2(100345))
// var mou = require('./mou.js')
// mou.Mo()

// async function f() {
//     try {
//         await Promise.reject('出错了');
//     } catch(e) {
//         return await Promise.resolve('hello world');
//     }
// }

async function f() {
    await Promise.reject('出错了')
    .catch(e => console.log(e))
    return await Promise.resolve('hello world')
}

f()
.then(v => console.log(v))
.catch(e => console.log(e))
