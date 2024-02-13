export const ACTIONS = {
	SET_FIELD: 'SET_FIELD',
	SET_STATUS: 'SET_STATUS',
	SET_CURENT_PLAYER: 'SET_CURENT_PLAYER',
	STATE_RESET: 'STATE_RESET',
};

export const setField = (payload) => {
	return {
		type: ACTIONS.SET_FIELD,
		payload,
	};
};
export const setStatus = (payload) => {
	return {
		type: ACTIONS.SET_STATUS,
		payload,
	};
};
export const setCurrentPlayer = (payload) => {
	return {
		type: ACTIONS.SET_CURENT_PLAYER,
		payload,
	};
};
export const STATE_RESET = {
	type: ACTIONS.STATE_RESET,
};
