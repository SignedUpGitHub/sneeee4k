//mrender: sprite-based terminal rendering engine

function matrix(row, col, defaultindex, charmap) {
    //initiate index table
    this.rows = row
    this.cols = col
    this.defaultIndex = defaultindex
    this.charmap = charmap
    this.tablemap = []


    let table = new Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
        table[i] = new Array(this.cols).fill(this.defaultIndex);
    }

    //SET: Takes in a point coordinate x/y/sprite index
    this.set = function(x, y, newIndex) {
        this.tablemap.push(`${x}/${y}/${newIndex}`)
        console.log(this.tablemap)
    }

    //RESET: Clears the whole tablemap
    this.reset = function() {
        this.tablemap = []      
    }

    //RENDER: Returns the whole converted map. If the override is set to false, overtbl is added to the original table map, if it is true, it will only print the overrided map. Overrides are good for cursors, players, moving things, etc.
    this.render = function(override, ovrtbl = []) {
        let output = JSON.parse(JSON.stringify(table));
        if (override) {
            output = mapArray(ovrtbl, output)
        } else {
            output = mapArray(this.tablemap.concat(ovrtbl), output)
        }
        
        //replace index with characters from the character map
        output = output.map(row => {
            return row.map(index => {
              return this.charmap[index] || index;
            })
          })

        output = output.map(element => element.join(' ')).join('\n')
        return output
    }
}

function mapArray(inparr, inptbl) {
    inparr.forEach(point => {
        p = point.split('/')
        inptbl[p[1]][p[0]] = p[2]
    })
    return inptbl
}
module.exports = matrix