import rootEpic from './epics/rootEpic';
import {createEpicMiddleware} from 'redux-observable';

export const reduxOvservable = createEpicMiddleware(rootEpic);
