import React, { Component } from 'React';
import LearningRecordList from './components/LearningRecordList';
import {
	StatusBar,
	StyleSheet,
	Text,
	View,
	TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import learningRecordActions from './actions/learningRecordActions';

const styles = StyleSheet.create({
	container: {flex: 1, alignItems: `center`},
	text: {marginTop: 100}
});

class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<StatusBar translucent={true} backgroundColor="rgba(44, 62, 80, 0.1)"/>
				<LearningRecordList />
				<TouchableHighlight onPress={this.props.fetchLearningRecords}>
					<Text style={styles.welcome}>
						Press
					</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const mapDispatch = (dispatch) => ({
	fetchLearningRecords: () => {
		dispatch(learningRecordActions.fetchLearningRecords());
	}
});

export default connect(null, mapDispatch)(App);
