import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as types from '../../../../../actions/actionTypes';

export default function learningRecordEpic(action$, store) {
	return action$
		.ofType(types.FETCH_LEARNING_RECORDS)
		.mergeMap((action) =>
			ajax({
				url: `http://192.168.112.128:3030/v2/learning-records?userId=404`,
				headers: {
					Authorization: `Bearer ${store.getState().blnApi.accessToken}`
				}
			})
			.map((result) => {
				return {
					type: types.FETCH_LEARNING_RECORDS_END,
					payload: result.response
				};
			})
			.catch((error) => {
				console.log('error', error);
			})
		)
	;
}
