import { SET_USER_PROFILE } from '../actionTypes';

export const setUserProfile = userData => ({
	type: SET_USER_PROFILE,
	payload: userData
});