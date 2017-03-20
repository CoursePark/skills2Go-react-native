import { combineReducers } from 'redux';
import learnspace from './learnspace';
import blnApi from './blnApi';
import user from './user';

export default combineReducers({
	blnApi,
	learnspace,
	user
});
