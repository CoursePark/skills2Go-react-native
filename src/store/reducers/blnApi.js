import * as types from '../../actions/actionTypes';
import { initialState } from '../initialState';

export default function blnApiReducer(state = initialState.blnApi, action) {
	switch(action.type) {
		case types.SET_BLN_API_ACCESS_TOKEN:
			return {
				...state,
				accessToken: action.payload.accessToken
			};
		default:
			return state;
	}
}
