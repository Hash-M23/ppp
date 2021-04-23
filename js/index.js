'use strict';

// Создаем в dom игровую доску
createBoard();

// Создаем игровые объекты, задаем стартовое положение, выводим в dom
const whitePawns = [];
for (let i = 0; i < 8; i++) {
    whitePawns[i] = new WhitePawn(String.fromCharCode(65 + i), '2');
}

const blackPawns = [];
for (let i = 0; i < 8; i++) {
    blackPawns[i] = new BlackPawn(String.fromCharCode(65 + i), '7');
}

const whiteKing = new WhiteKing('E', '1');
const blackKing = new BlackKing('E', '8');
const whiteQueen = new WhiteQueen('D', '1');
const blackQueen = new BlackQueen('D', '8');

const whiteHorseL = new WhiteHorse('B', '1');
const blackHorseL = new BlackHorse('B', '8');
const whiteHorseR = new WhiteHorse('G', '1');
const blackHorseR = new BlackHorse('G', '8');

const whiteBishopL = new WhiteBishop('C', '1');
const blackBishopL = new BlackBishop('C', '8');
const whiteBishopR = new WhiteBishop('F', '1');
const blackBishopR = new BlackBishop('F', '8');

const whiteRookL = new WhiteRook('A', '1');
const blackRookL = new BlackRook('A', '8');
const whiteRookR = new WhiteRook('H', '1');
const blackRookR = new BlackRook('H', '8');