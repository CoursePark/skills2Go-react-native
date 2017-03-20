import { applyMiddleware, createStore } from 'redux';
import { reduxLogger } from './middleware/reduxLogger';
import { reduxOvservable } from './middleware/reduxObservable';
import rootReducer from './reducers/rootReducer';

export function configureStore() {
	return createStore(
		rootReducer,
		applyMiddleware(reduxOvservable, reduxLogger)
	);
}
