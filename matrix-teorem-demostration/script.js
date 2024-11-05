class Board {
    constructor(y, x) {
        this.y = y;
        this.x = x;

        this.matrice = []
        for (let i = 0; i < y; i++) {
            let row = [];
            for (let j = 0; j < x; j++) {
                row.push(0);
            }

            this.matrice.push(row);
        }
    }

    getMatrice() {
        return this.matrice;
    }

    setEntry(y, x, value) {
        this.matrice[y][x] = value;
    }

    getRowEntries(y, x) {
        let entries = []

        if (this.matrice[y][x] !== undefined) {
            let counter = 1;

            while ((this.matrice[y] !== undefined) && (this.matrice[y][x - counter] !== undefined)) {
                entries.push([y, x - counter]);
                counter++;
            }

            entries.reverse();
            entries.push([y, x]);
            counter = 1;

            while ((this.matrice[y] !== undefined) && (this.matrice[y][x + counter] !== undefined)) {
                entries.push([y, x + counter]);
                counter++;
            }
        }

        return entries;
    }

    getColumnEntries(y, x) {
        let entries = []

        if (this.matrice[y][x] !== undefined) {
            let counter = 1;

            while ((this.matrice[y - counter] !== undefined) && (this.matrice[y - counter][x] !== undefined)) {
                entries.push([y - counter, x]);
                counter++;
            }

            entries.reverse();
            entries.push([y, x]);
            counter = 1;

            while ((this.matrice[y + counter] !== undefined) && (this.matrice[y + counter][x] !== undefined)) {
                entries.push([y + counter, x]);
                counter++;
            }
        }

        return entries;
    }

    getDiagonalAEntries(y, x) {
        let entries = []

        if (this.matrice[y][x] !== undefined) {
            let counter = 1;

            while ((this.matrice[y - counter] !== undefined) && (this.matrice[y - counter][x - counter] !== undefined)) {
                entries.push([y - counter, x - counter]);
                counter++;
            }

            entries.reverse();
            entries.push([y, x]);
            counter = 1;

            while ((this.matrice[y + counter] !== undefined) && (this.matrice[y + counter][x + counter] !== undefined)) {
                entries.push([y + counter, x + counter]);
                counter++;
            }
        }

        return entries;
    }

    getDiagonalBEntries(x, y) {
        let entries = []

        if (this.matrice[y][x] !== undefined) {
            let counter = 1;

            while ((this.matrice[y + counter] !== undefined) && (this.matrice[y + counter][x - counter] !== undefined)) {
                entries.push([y + counter, x - counter]);
                counter++;
            }

            entries.reverse();
            entries.push([y, x]);
            counter = 1;

            while ((this.matrice[y - counter] !== undefined) && (this.matrice[y - counter][x + counter] !== undefined)) {
                entries.push([y - counter, x + counter]);
                counter++;
            }
        }

        return entries;
    }

    numberRows() {
        for (let i = 0; i < this.matrice.length; i++) {
            for (let j = 0; j < this.matrice[0].length; j++) {
                this.matrice[i][j] = i + 1;
            }
        }
    }

    writeRow(y, number) {
        for (let j = 0; j < this.matrice[0].length; j++) {
            this.matrice[y][j] = number;
        }
    }
}



/* 
    De aquí en adelante solo falta crear la clase "Game" con funciones para
    instanciar la clase Board, detectar cuando se ha perdido el juego, renderizar
    el tablero en el DOM, añadir funciones para reiniciar el juego e iniciar
    los event listeners.
*/

function renderMatrice(xd, element) {
    if (document.querySelector('.table') != undefined) {
        document.querySelector(element).removeChild(document.querySelector('.table'));
    }
    let table = document.createElement('div');
    table.setAttribute('class', 'table');

    let matrice = xd.getMatrice()
    for (let i = 0; i < matrice.length; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');

        for (let j = 0; j < matrice[i].length; j++) {
            let entry = document.createElement('div');
            entry.setAttribute('class', 'entry');

            entry.innerText = matrice[i][j];

            entry.dataset.y = i;
            entry.dataset.x = j;

            row.appendChild(entry);
        }

        table.appendChild(row);
    }

    document.querySelector(element).appendChild(table);
}

document.querySelector('#matrix1Render').addEventListener('click', () => {
    let y = parseInt(document.getElementById('matrix1Y').value);
    let x = parseInt(document.getElementById('matrix1X').value);
    let matrix = new Board(y, x);

    matrix.numberRows()
    matrix.writeRow(y - 1, 0);

    if (isNaN(y) || y < 1 || y > 10 || isNaN(x) || x < 1 || x > 10) {
        alert("Ingrese valores válidos");
    } else {
        document.getElementById('matrix1Render').setAttribute('disabled', 'true');
        renderMatrice(matrix, ".Matrix1");

        let matrixx = document.querySelector('.Matrix1').children[document.querySelector('.Matrix1').children.length - 1];
        for (let i = 1; i <= y; i++) {
            setTimeout(() => {
                if (i != y) {
                    matrixx.children[(matrixx.children.length - 1) - i]
                        .style.transform = `translate(0, 50px)`;

                    matrixx.children[(matrixx.children.length - 1)]
                        .style.transform = `translate(0, -${50 * i + 5}px)`
                    console.log(i)
                } else {
                    document.getElementById('matrix1Render').removeAttribute('disabled');
                }
            }, i * 1000);
        }
    }
})

document.querySelector('#matrix2Render').addEventListener('click', () => {
    let y = parseInt(document.getElementById('matrix1Y').value);
    let x = parseInt(document.getElementById('matrix1X').value);
    let matrix = new Board(y, x);

    matrix.numberRows()
    matrix.writeRow(y - 1, 0);

    if (isNaN(y) || y < 1 || y > 10 || isNaN(x) || x < 1 || x > 10) {
        alert("Ingrese valores válidos");
    } else {
        document.getElementById('matrix2Render').setAttribute('disabled', 'true');
        renderMatrice(matrix, ".Matrix1");

        setTimeout(() => {
            document.querySelector('.Matrix1')
                .children[document.querySelector('.Matrix1').children.length - 1]
                .children[y - 1]
                .style.transform = `translate(calc(-100% - 20px),0)`;
        }, 1000);

        setTimeout(() => {
            for (i = 0; i < y - 1; i++) {
                let matrix = document.querySelector('.Matrix1').children[document.querySelector('.Matrix1').children.length - 1];

                matrix.children[i]
                    .style.transform = `translate(0, ${50}px)`;
                console.log(matrix);
            }
        }, 2000);

        setTimeout(() => {
            document.querySelector('.Matrix1')
                .children[document.querySelector('.Matrix1').children.length - 1]
                .children[y - 1]
                .style.transform = `translate(calc(-100% - 20px), -${(y - 1) * 50 + 5}px)`;
        }, 3000);

        setTimeout(() => {
            document.querySelector('.Matrix1')
                .children[document.querySelector('.Matrix1').children.length - 1]
                .children[y - 1]
                .style.transform = `translate(0, -${(y - 1) * 50 + 5}px)`;
            document.getElementById('matrix2Render').removeAttribute('disabled');
        }, 4000);
    }
})
