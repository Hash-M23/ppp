'use strict';

const GAME = document.querySelector('#game');
const BOARD = GAME.querySelector('#board');
const BOARD_SIZE = 8;

class Chessman {
    constructor(x, y, unicode) {
        this.x = x;
        this.y = y;
        this.unicode = unicode;

        this.DOMentity = document.createElement("div");
        this.DOMentity.classList.add('figure');
        this.DOMentity.innerHTML = this.unicode;
        this.DOMentity.style.cursor = 'pointer';

        this.setPosition(this.x, this.y);

        this.DOMentity.addEventListener('mouseover', () => {
            this.DOMentity.classList.add('blink');
            this.DOMentity.parentElement.style.outline = '2px solid red';
        });
        this.DOMentity.addEventListener('mouseout', () => {
            this.DOMentity.classList.remove('blink');
            this.DOMentity.parentElement.style.outline = '';
        });
        this.DOMentity.addEventListener('mousedown', () => {
        });
    }

    setPosition(x, y) {
        const cell = BOARD.querySelector(`#${x + y}`);
        cell.appendChild(this.DOMentity);
    }

    turn(x, y) {
    }
}

class WhitePawn extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9817;');
    }
}

class BlackPawn extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9823;');
    }
}

class WhiteKing extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9812;');
    }
}

class BlackKing extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9818;');
    }
}

class WhiteQueen extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9813;');
    }
}

class BlackQueen extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9819;');
    }
}

class WhiteHorse extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9816;');
    }
}

class BlackHorse extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9822;');
    }
}

class WhiteBishop extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9815;');
    }
}

class BlackBishop extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9821;');
    }
}

class WhiteRook extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9814;');
    }
}

class BlackRook extends Chessman {
    constructor(x, y) {
        super(x, y, '&#9820;');
    }
}

function createBoard() {
    const table = document.createElement('table');

    table.classList.add('table');
    table.setAttribute("cellspacing", "0");
    BOARD.appendChild(table);

    let rowNum = (BOARD_SIZE + 1);

    for (let x = 0; x < BOARD_SIZE + 2; x++) {
        let colNumText = 65, colNum = 64; // коды символов для буквенной нумерации

        let row = document.createElement('tr');
        row.classList.add('row');
        table.appendChild(row);

        for (let y = 0; y < BOARD_SIZE + 2; y++) {
            let cell = document.createElement('td');
            cell.classList.add('cell');

            if (x === 0 || x === BOARD_SIZE + 1) {
                cell.classList.add('border', 'horizontalborder');

                if (y !== 0 && y !== BOARD_SIZE + 1) {
                    cell.textContent = String.fromCharCode(colNumText++);
                }
            }

            if (y === 0 || y === BOARD_SIZE + 1) {
                cell.classList.add('border', 'verticalborder');

                if (x !== 0 && x !== BOARD_SIZE + 1) {
                    cell.textContent = rowNum;
                }
            }

            if (x !== 0 && x !== BOARD_SIZE + 1 && y !== 0 && y !== BOARD_SIZE + 1) {
                if ((x + y) % 2 === 0) {
                    cell.classList.add('bright');
                } else {
                    cell.classList.add('dark');
                }
                colNum++;
                cell.id = `${String.fromCharCode(colNum) + rowNum}`;
            }

            row.appendChild(cell);
        }
        rowNum--;
    }
}