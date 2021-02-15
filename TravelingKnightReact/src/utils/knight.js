class Position {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

class Knight {
	constructor(position){
		this.moves = [
			{
				y: [-2],
				x: [-1, 1],
			},
			{
				y: [-1, 1],
				x: [2],
			},
			{
				y: [2],
				x: [-1, 1],
			},
			{
				y: [-1, 1],
				x: [-2],
			}
		]
		this.position = position;
	}

	setPosition(position) {
		this.position = position;
	}

	getAvailableMovements(boardSize){
		const availableMovements = {};
		this.moves.forEach( move => {
			move.y.forEach(yMove => {
				move.x.forEach(xMove => {
					const tryPosition = new Position(this.position.x + xMove, this.position.y + yMove);
					if(isInBoard(tryPosition, boardSize)) {
						availableMovements[buildKey(tryPosition.x, tryPosition.y)] = true;
					}
				})
			})
		});
		return availableMovements;
	}
	
}

const isInBoard = (position, boardSize) => {
	return position.x < boardSize && position.x >= 0 && position.y >= 0 && position.y < boardSize;
}

const buildKey = (x, y) => {
	return `${x},${y}`;
}

const isInPosition = (position1, position2) => position1.x === position2.x && position1.y === position2.y;

module.exports = {
	Knight,
	Position,
	buildKey,
	isInPosition,
}
