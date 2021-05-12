const fs = require('fs')
const path = require('path')


const f1 = path.join(__dirname, 'in1.txt')
const f2 = path.join(__dirname, 'in2.txt')


fs.readFile(f1, (err, data) => {
    const arr1 = data.toString().split('\n')

    console.log(arr1)

    fs.readFile(f2, (err, data) => {
        const arr2 = data.toString().split('\n')

        console.log(arr2)

        let ans = arr1.concat(arr2)

        console.log(ans)
        ans.sort((a, b) => a - b)
        ans = ans.join('\n')
        console.log(ans)
        fs.writeFile('output.txt', ans, {
            encoding: 'utf-8',
            flag: 'w'
        }, (err) => {
            console.log("file written successfully")
            console.log("all done")
        })
    })
})