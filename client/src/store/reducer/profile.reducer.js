import { SET_USER_PROFILE, DELETE_USER_PROFILE } from '../actionTypes';
import LC from "local-storage";

const initialState = {};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_PROFILE: {
			LC.set('profile', action.payload);
			const profile = LC.get('profile');
			return {
				...state,
				...profile,
			}
		}
		case DELETE_USER_PROFILE: {
			LC.clear();
			return {
				...state,
			}
		}
		default:
			return state;
	}
}