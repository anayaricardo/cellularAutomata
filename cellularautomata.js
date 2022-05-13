class CellularAutomata {

    constructor(size, ctx, cells){
        this.size = size;
        this.ctx = ctx;
        this.cells = cells ? cells : [];
    }

    create(){
        for(let x=0; x<this.size; x++){
            let row = [];
            for(let y=0; y<this.size; y++){
                const alive= Math.random()<0.5;
                row.push(alive);
            }
            this.cells.push(row);
        }
    }

    next(){
        this.print();
        this.evaluate();
    }
    print(){
        this.ctx.clearRect(0,0, this.size, this.size);
        for(let x=0; x<this.size; x++){
            for(let y=0; y<this.size; y++){
                if(this.cells[x][y])
                this.ctx.fillStyle="darkolivegreen";
                else
                this.ctx.fillStyle="yellowgreen";
                this.ctx.fillRect(x,y,1,1);
            }
        }
    }

    evaluate(){
        let cellsAux = new Array(100).fill("").map(()=>new Array(100).fill(false));

        for(let x=0; x<this.size; x++){
            for(let y=0; y<this.size; y++){
                let livingNeighbor = 0;

                //1
                if(x>0 && y>0)
                if(this.cells[x-1][y-1])
                livingNeighbor++;

                //2
                if(y>0)
                if(this.cells[x][y-1])
                livingNeighbor++;

                //3
                if(x<(this.size-1) && y>0)
                if(this.cells[x+1][y-1])
                livingNeighbor++;

                //4
                if(x>0)
                if(this.cells[x-1][y])
                livingNeighbor++;

                //5
                if(x<(this.size-1))
                if(this.cells[x+1][y])
                livingNeighbor++;

                //6
                if(x > 0 && y<(this.size-1))
                if(this.cells[x-1][y+1])
                livingNeighbor++;

                //7
                if(y<(this.size-1))
                if(this.cells[x][y+1])
                livingNeighbor++;

                //8
                if(x<(this.size-1) && y<(this.size-1))
                if(this.cells[x+1][y+1])
                livingNeighbor++;

                if(this.cells[x][y])
                cellsAux[x][y]= livingNeighbor == 2 ||
                                livingNeighbor == 3 ? true : false;
                else
                cellsAux[x][y]= livingNeighbor == 3 ? true :false;
            }
        }
        this.cells = cellsAux;
    }
}

const cells = new Array(100).fill("").map(()=>new Array(100).fill(false));

//food
cells[0][4] = true;
cells[0][5] = true;
cells[1][4] = true;
cells[1][5] = true;

//mother
cells[10][4] = true;
cells[10][5] = true;
cells[10][6] = true;
cells[11][3] = true;
cells[11][7] = true;
cells[12][2] = true;
cells[12][8] = true;
cells[13][2] = true;
cells[13][8] = true;
cells[14][5] = true;
cells[15][3] = true;
cells[15][7] = true;
cells[16][4] = true;
cells[16][5] = true;
cells[16][6] = true;
cells[17][5] = true;

//father
cells[20][2] = true;
cells[20][3] = true;
cells[20][4] = true;
cells[21][2] = true;
cells[21][3] = true;
cells[21][4] = true;
cells[22][1] = true;
cells[22][5] = true;
cells[24][0] = true;
cells[24][1] = true;
cells[24][5] = true;
cells[24][6] = true;

//food
cells[34][2] = true;
cells[34][3] = true;
cells[35][2] = true;
cells[35][3] = true;

// copy food
// cells[0][82]= true;
// cells[0][83]= true;
// cells[1][82]= true;
// cells[1][83]= true;

// copy food
// cells[34][80] = true;
// cells[34][81] = true;
// cells[35][80] = true;
// cells[35][81] = true;

//Reproducción automática
// cells[64][53] = true;
// cells[64][54] = true;
// cells[64][55] = true;
// cells[64][56] = true;
// cells[64][57] = true;

//Solo pruebas
// cells[60][3] = true;
// cells[60][4] = true;
// cells[60][5] = true;
// cells[60][6] = true;
// cells[60][7] = true;

//Solo pruebas
// cells[63][3] = true;
// cells[63][4] = true;
// cells[63][5] = true;
// cells[63][6] = true;
// cells[63][7] = true;

//Solo pruebas
// cells[3][30] = true;
// cells[4][30] = true;
// cells[5][30] = true;
// cells[6][30] = true;
// cells[7][30] = true;

//Solo pruebas
// cells[3][30] = true;
// cells[4][30] = true;
// cells[5][30] = true;
// cells[6][30] = true;
// cells[7][30] = true;


const ctx = canvas.getContext("2d");
const cellularAutomata = new CellularAutomata(100, ctx, cells);
cellularAutomata.create();
cellularAutomata.print();
setInterval(()=>cellularAutomata.next(), 100);