import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { useSelector } from 'react-redux';

export const Information = () => {
	const status = useSelector((state) => state.status);
	const currentPlayer = useSelector((state) => state.currentPlayer);

	const playerAction = PLAYER_ACTION[status];

	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <div>{information}</div>;
};
