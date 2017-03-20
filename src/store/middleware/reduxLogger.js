import createLogger from 'redux-logger';

export const reduxLogger = createLogger({
	predicate: (getState, action) => process.env.NODE_ENV === `development`,
	collapsed: true,
	duration: true
});
