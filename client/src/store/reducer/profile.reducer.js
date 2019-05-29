import { SET_USER_PROFILE } from '../actionTypes';
import LC from "local-storage";

const defaultState = {
	isAuth: false,
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE: {
			LC.set('profile', action.payload.user);
			LC.set('token', action.payload.token);

			return {
				...state,
				isAuth: LC.get('profile') !== null
			};
		}
		default:
			return state;
	}
}