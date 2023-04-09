const mrender = require('./modules/mrender.js')

const indexChart = {
    0: "☐",
    1: "▣",
}

const table = new mrender(5, 6, 0, indexChart)
table.set(2, 3, 1)
table.set(0,0, "e")
table.set(1,0,"u")

console.log(table.render(0, ['0/0/1']))