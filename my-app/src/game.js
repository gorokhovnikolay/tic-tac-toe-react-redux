import { Field, Information } from './components';
import styles from './game.module.css';
import { STATE_RESET } from './store/actions';
import { useDispatch } from 'react-redux';

export const Game = () => {
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(STATE_RESET);
	};

	return (
		<div className={styles.game}>
			<Information />
			<Field />
			<button className={styles.restartButton} onClick={handleRestart}>
				Начать заново
			</button>
		</div>
	);
};
