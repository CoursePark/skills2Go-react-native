import CodePush from 'react-native-code-push';
import React, { Component } from 'react';
import App from './App';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import * as types from './actions/actionTypes';

export default class AppRoot extends Component {
	constructor() {
		super();
		this.store = configureStore();
		// this.store.dispatch({type: types.FETCH_LEARNING_RECORDS});
	}
	
	componentDidMount() {
		AppState.addEventListener(`change`, this._handleAppStateChange);
		CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});
	}
	
	componentWillUnmount() {
		AppState.removeEventListener(`change`, this._handleAppStateChange);
	}
	
	_handleAppStateChange(appState) {
		if (appState === `active`) {
			CodePush.sync({
				updateDialog: true,
				installMode: CodePush.InstallMode.IMMEDIATE
			});
		}
	}
	
	render() {
		return (
			<Provider store={this.store}>
				<App/>
			</Provider>
		);
	}
}
