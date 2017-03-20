import React, { Component } from 'react';
import { ListView, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import UserAvatar from 'react-native-user-avatar';

class LearningRecordListItem extends Component {
	render() {
		if (!Object.keys(this.props)) {
			return null;
		}
		return (
			<View style={{flex: 1, flexDirection: `row`, padding: 10}}>
				<UserAvatar
					size="45"
					name={this.props.product.name.split(` `)[0].toLowerCase()}
					colors={[`#58D68D`, `#EC7063`, `#F8C471`, `#ABEBC6`, `#AED6F1`, `#DAF7A6`]}
					src={this.props.product.logo && this.props.product.logo.url}
				/>
				<View style={{flex: 1, flexDirection: `row`, padding: 5}}>
					<Text style={{textAlign: `center`}}>{this.props.product && this.props.product.name}</Text>
					{
						this.props.completion === `completed`
							&& <Image style={{marginLeft: 20, width: 20, height: 20}} backgroundColor='#58D68D' borderRadius={20} source={require(`./ic_done_black_24dp.png`)}/>
							|| <Image style={{marginLeft: 20, width: 20, height: 20}} backgroundColor='#EC7063' borderRadius={20} source={require(`./ic_close_black_24dp.png`)}/>
						
					}
				</View>
			</View>
		);
	}
}

class LearningRecordList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => {
					return row1 !== row2;
				}
			})
		};
	}
	
	getDataSource(items) {
		return this.state.dataSource.cloneWithRows(items);
	}
	
	renderSeparator(sectionID, rowID) {
		return (
			<View key={`SEP_${sectionID}_${rowID}`}
				style={{
					backgroundColor: `rgba(0, 0, 0, 0.1)`,
					height: 1
				}
				}
			/>
		);
	}
	
	render() {
		if (this.props.learningRecords.length) {
			return (
				<View style={{flex: 1, alignSelf: `stretch`, paddingTop: 22}}>
					<ListView
						dataSource={this.getDataSource(this.props.learningRecords)}
						renderRow={(learningRecord) =>
							<LearningRecordListItem {...learningRecord}/>
						}
						renderSeparator={this.renderSeparator}
					/>
				</View>
			);
		}
		return (
			<View style={{flex: 1, justifyContent: `center`, paddingTop: 22}}>
				<Text>{`No Data`}</Text>
			</View>
		);
	}
}

const mapState = (state) => {
	const itmes = state.learnspace.learningRecords.filter((lr, index) => {
		return lr.product;
	});
	if (itmes.length) {
		itmes.push({product: {name: "A Product"}, completion: `failed`});
		itmes.push({product: {name: "B Product"}, completion: `failed`});
		itmes.push({product: {name: "C Product"}, completion: `failed`});
		itmes.push({product: {name: "D Product"}, completion: `failed`});
		itmes.push({product: {name: "G Product"}, completion: `failed`});
	}
	return {learningRecords: itmes};
};

export default connect(mapState)(LearningRecordList);
