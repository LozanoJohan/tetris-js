//import { BOARD_HEIGHT, BOARD_WIDTH } from "./constants.js"

// CONTANSTS
const BOARD_WIDTH = 10
const BOARD_HEIGHT = 20
// END CONSTANTS

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

context.fillStyle = "yellow"

const board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0],
]
//Array(BOARD_HEIGHT).fill(Array(BOARD_WIDTH).fill(0))

const piece = [
    [
        [0, 1, 0],
        [1, 1, 1]
    ],
    [
        [0, 1],
        [1, 1]
    ]
]

piece.forEach((row, y) => row.forEach((pixel, x) => {
    context.fillRect(x, y, 10, 10)
    board[y][x] = 1
}
))

draw()

function draw() {
    board.forEach((row, y) => {
        row.forEach((square, x) => {
            console.log(square)
            square && context.fillRect(x, y, 10, 10)
        })
    })
}

console.log(board)