const square = n => n * n

const add = (x, y) => x + y

const PI = 3.14
    // console.log(square(3))

// console.log(module.exports)

const all = {
    square: square,
    add: add,
    PI: PI
}

// module.exports.square = square
// module.exports.add = add
// module.exports.PI = PI

module.exports = all