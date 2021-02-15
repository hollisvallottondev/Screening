import React, {FC, ReactElement, ReactNode, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom'; 
import './styles.sass';
import { buildKey, isInPosition, Knight, Position } from './utils/knight';

const App: FC = (): ReactElement => {
	const [ boardSize, setBoardSize] = useState(8);
	const [ positionX, setPositionX] = useState(4);
	const [ positionY, setPositionY] = useState(4);
	const [ knight, setKnight ] = useState<Knight>(new Knight(new Position(4, 4)));

	useEffect(() => {
		const newKnight = new Knight(new Position(positionX, positionY)); 
		setKnight(newKnight);
	}, [positionX, positionY]);

	const handleCellClick = (x: number, y: number) => {
		setPositionX(x);
		setPositionY(y);
	}
	const movements = knight.getAvailableMovements(boardSize);

	return (
		<div className='mainContainer'>
			<div className='controlsContainer'>
				<label>Board size</label>
				<input onChange={e => setBoardSize(Number(e.target.value))} value={boardSize} />
				<label>X</label>
				<input onChange={e => setPositionX(Number(e.target.value))} value={positionX} />
				<label>Y</label>
				<input onChange={e => setPositionY(Number(e.target.value))} value={positionY} />
			</div>
			{
				buildBoard(boardSize, movements, new Position(positionX, positionY), handleCellClick)
					.map(row => (
						<div className={'row'}>
							{
								row.map(cell => (cell))
							}
						</div>
					))
			}
		</div>
	)
}

const buildBoard = (boardSize: number, movements: any, currentPosition: Position, clickHandler: (x: number, y: number) => void) => {
	const cells: Array<ReactElement[]> = [];
	for(let y = 0; y < boardSize; y++) {
		cells.push([]);
		for(let x=0; x < boardSize; x++) {
			let color = '';
			let char = '';
			if(isInPosition(new Position(x, y), currentPosition)){
				color = 'blue';
				char = 'Knight';
			} else if (movements[buildKey(x, y)]) {
				color = 'green';
				char = 'Move'
			} else {
				color = y % 2 === 0
				? x % 2 === 0? 'black' : 'white' 
				: x % 2 === 0? 'white' : 'black' 
			}
			cells[y].push(<div onClick={() => clickHandler(x, y)} style={{background: color}} className={'cell'}>{char}</div>)
		}
	} 
	return cells;
}



export default App;

console.log('log')
ReactDOM.render(<App />, document.getElementById('root'));   