import * as types from './actionTypes';

function fetchLearningRecords(payload) {
	return {type: types.FETCH_LEARNING_RECORDS, payload};
}

export default {fetchLearningRecords};
