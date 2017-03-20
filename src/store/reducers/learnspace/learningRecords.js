import * as types from '../../../actions/actionTypes';
import { initialState } from '../../initialState';

export default function learningRecordReducer(state = initialState.learnspace.learningRecords, action) {
	switch(action.type) {
		case types.FETCH_LEARNING_RECORDS:
			return state;
		case types.FETCH_LEARNING_RECORDS_END:
			{
				const newState = [
					...state,
					...action.payload
				];
				return newState;
			}
		default:
			return state;
	}
}
