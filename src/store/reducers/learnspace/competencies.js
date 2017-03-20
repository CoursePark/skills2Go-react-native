import * as types from '../../../actions/actionTypes';
import { initialState } from '../../initialState';

export default function competenciesReducer(state = initialState.learnspace.competencies, action) {
	switch(action.type) {
		case types.FETCH_PRODUCT_COMPETENCIES:
			return state;
		default:
			return state;
	}
}
