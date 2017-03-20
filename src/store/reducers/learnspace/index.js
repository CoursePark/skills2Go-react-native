import { combineReducers } from 'redux';
import competencies from './competencies';
import learningRecords from './learningRecords';

export default combineReducers({
	competencies,
	learningRecords
});
