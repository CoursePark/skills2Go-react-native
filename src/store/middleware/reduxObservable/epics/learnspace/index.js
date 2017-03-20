import { combineEpics } from 'redux-observable';
import learningRecords from './learningRecords';

export default combineEpics(
	learningRecords
);
