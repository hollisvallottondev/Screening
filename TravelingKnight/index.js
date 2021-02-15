const {Position, Knight, isInPosition, buildKey} = require('./knight'); 

const boardSize = 8;
const initialPosition = new Position(5, 4); 
const knight = new Knight(initialPosition); 

const movements = knight.getAvailableMovements(boardSize);

console.log('movements', movements);

if (Object.keys(movements).length > 0) {
	const board = [];
	for(let i = 0; i < boardSize; i++) {
		board.push([]);
		for(let j = 0; j < boardSize; j++) {
			const character = isInPosition(new Position(j, i), initialPosition)
				? 'K'
				: movements[buildKey(j, i)]
					? 'X' 
					: ' ';
			board[i].push(character)
		}
	}
	
	console.table(board);
} else {
	console.log('No moves available');
}
