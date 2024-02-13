import { PLAYER_SIGN, STATUS, PLAYER } from '../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { setField, setStatus, setCurrentPlayer } from '../../store/actions';
import { checkWin, checkEmptyCell } from '../../utils';
import styles from './field.module.css';

export const Field = () => {
	const status = useSelector((state) => state.status);
	const field = useSelector((state) => state.field);
	const currentPlayer = useSelector((state) => state.currentPlayer);
	const dispatch = useDispatch();

	const handleCellClick = (cellIndex) => {
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return;
		}

		const newField = [...field];

		newField[cellIndex] = currentPlayer;

		dispatch(setField(newField));

		if (checkWin(newField, currentPlayer)) {
			dispatch(setStatus(STATUS.WIN));
		} else if (checkEmptyCell(newField)) {
			const newCurrentPlayer =
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
			dispatch(setCurrentPlayer(newCurrentPlayer));
		} else {
			dispatch(setStatus(STATUS.DRAW));
		}
	};

	return (
		<div className={styles.field}>
			{field.map((cellPlayer, cellIndex) => (
				<button
					key={cellIndex}
					className={styles.cell}
					onClick={() => handleCellClick(cellIndex)}
				>
					{PLAYER_SIGN[cellPlayer]}
				</button>
			))}
		</div>
	);
};
