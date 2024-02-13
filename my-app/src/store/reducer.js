import { STATUS, PLAYER } from '../constants';
import { createEmptyField } from '../utils';
import { ACTIONS } from './actions';

const initialState = {
	status: STATUS.TURN,
	currentPlayer: PLAYER.CROSS,
	field: createEmptyField(),
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_FIELD:
			return { ...state, field: payload };
		case ACTIONS.SET_CURENT_PLAYER:
			return { ...state, currentPlayer: payload };
		case ACTIONS.SET_STATUS:
			return { ...state, status: payload };
		case ACTIONS.STATE_RESET:
			return initialState;
		default:
			return state;
	}
};
