const PIECES = {
    'white-king': '♔',
    'white-queen': '♕',
    'white-rook': '♖',
    'white-bishop': '♗',
    'white-knight': '♘',
    'white-pawn': '♙',
    'black-king': '♚',
    'black-queen': '♛',
    'black-rook': '♜',
    'black-bishop': '♝',
    'black-knight': '♞',
    'black-pawn': '♟'
};

const COLORS = [
    "#ffffff",
    "#b1ffb1",
    "#ffb1b1"
]

const MAPPED_PIECES = [
    '',
    PIECES["black-queen"],
    'x'
]

class Board {
    constructor(size) {
        this.y = size;
        this.x = size;

        this.matrice = []
        for (let i = 0; i < size; i++) {
            let row = [];
            for (let j = 0; j < size; j++) {
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
}

class Game {
    constructor() {
        this.board = new Board(8);

        this.domBoard = document.getElementById('board');

        // Set dataset
        for (let i = 0; i < this.domBoard.children.length; i++) {
            for (let j = 0; j < this.domBoard.children[i].children.length; j++) {
                this.domBoard.children[i].children[j].dataset.y = i;
                this.domBoard.children[i].children[j].dataset.x = j;
            }
        }

        this.setEventListeners();
        this.renderBoard();
    }

    restarting = false;

    renderBoard() {
        this.board.matrice.forEach((row, i) => {
            row.forEach((entry, j) => {
                let el = this.domBoard.children[i].children[j];

                el.children[0].innerText = MAPPED_PIECES[entry];
                if (entry == 1) {
                    el.classList.add('Queen');
                } else {
                    el.classList.remove('Queen');
                }

                if (entry == 2) {
                    el.classList.add('Invalid');
                } else {
                    el.classList.remove('Invalid');
                }
            })
        })
    }

    setQueen(y, x) {
        if (this.board.getMatrice()[y][x] === 0) {
            this.board.getRowEntries(y, x).forEach(el => {
                this.board.setEntry(el[0], el[1], 2);
            })

            this.board.getColumnEntries(y, x).forEach(el => {
                this.board.setEntry(el[0], el[1], 2);
            })

            this.board.getDiagonalAEntries(y, x).forEach(el => {
                this.board.setEntry(el[0], el[1], 2);
            })

            this.board.getDiagonalBEntries(y, x).forEach(el => {
                this.board.setEntry(el[0], el[1], 2);
            })

            this.board.setEntry(y, x, 1);

            this.renderBoard();

            if (this.availableSquares()[0] == 0) {
                switch (this.availableSquares()[1]) {
                    case 8:
                        this.winGame();
                        break;

                    default:
                        this.loseGame();
                        break;
                }
            }
            return 1; // Success
        } else {
            return 0; // Invalid placement
        }
    }

    setEventListeners() {
        for (let i = 0; i < this.domBoard.children.length; i++) {
            for (let j = 0; j < this.domBoard.children[i].children.length; j++) {
                let el = this.domBoard.children[i].children[j],
                    clone = el.cloneNode(true);

                clone.addEventListener('click', () => {
                    let y = parseInt(clone.dataset.y),
                        x = parseInt(clone.dataset.x);
                    this.setQueen(y, x)
                })
                el.parentNode.replaceChild(clone, el);
            }
        }

        let el = document.getElementById('restartButton'),
            clone = el.cloneNode(true);

        clone.addEventListener('click', () => {
            if (!this.restarting) {
                this.restarting = true;
                clone.innerHTML = 'Reiniciar'

                this.killPieces();

                setTimeout(() => {
                    game = new Game();
                    this.restarting = false;
                }, 1000)
            }

        })

        el.parentNode.replaceChild(clone, el)
    }

    availableSquares() {
        let available = 0;
        let queens = 0;

        this.board.matrice.forEach(row => {
            row.forEach(entry => {
                if (entry == 0) {
                    available++;
                } else if (entry == 1) {
                    queens++;
                }
            })
        })

        return [available, queens];
    }

    killPieces() {
        for (let i = 0; i < this.domBoard.children.length; i++) {
            for (let j = 0; j < this.domBoard.children[i].children.length; j++) {
                let el = this.domBoard.children[i].children[j];

                el.classList.add('Killed');
                let xDisplacement = (parseInt(Math.random() * 4) - 2) * 32;
                el.children[0].style.left = xDisplacement + 'px';
            }
        }

        setTimeout(() => {

            for (let i = 0; i < this.domBoard.children.length; i++) {
                for (let j = 0; j < this.domBoard.children[i].children.length; j++) {
                    let el = this.domBoard.children[i].children[j];

                    el.classList.remove('Killed');
                    el.children[0].style.left = '';
                }
            }
        }, 1000);
    }

    winGame() {
        let el = document.getElementById('restartButton')
        el.innerHTML = 'Jugar de nuevo'

        document.getElementById('alertMessage').innerText = '¡Has ganado!'
        document.getElementById('alertMessage').style.color = '#4a934a'
        document.querySelector('.Alert').style.display = 'flex';
    }

    loseGame() {
        let el = document.getElementById('restartButton')
        el.innerHTML = 'Reintentar'

        document.getElementById('alertMessage').innerText = '¡Has perdido!'
        document.getElementById('alertMessage').style.color = '#ca0b00'
        document.querySelector('.Alert').style.display = 'flex';
    }
}

document.getElementById('alertButton').addEventListener('click', () => {
    document.querySelector('.Alert').style.display = '';
})

let game = new Game();