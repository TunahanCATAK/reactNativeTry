import React, {Component} from "react";

import {StyleSheet, Text, View, FlatList} from "react-native";

const weatherHistoryList = [
    {
        temp: 45.23
    }
]

class WeatherHistoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this._addKeysToHistoryList(weatherHistoryList)
        };
    }

    _addKeysToHistoryList = weatherItems => {
        return weatherItems.map(weatherItem => {
            return Object.assign(weatherItem, {key: weatherItem.temp});
        });
    }

    addHistoryList(weatherHistory) {
        weatherHistoryList.push(weatherHistory);
        this.setState({data: this._addKeysToHistoryList(weatherHistoryList)});
    }

    _renderItem = data => {
        return <Text style = {styles.row}>{data.item.key}</Text>;
    };

    render() {
        return (
            <View styles={styles.container}>
                <FlatList data={this.state.data} renderItem={this._renderItem}/>        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    row: {fontSize: 24, padding: 42, borderWidth: 1, borderColor: "#DDDDDD" }
});

export default WeatherHistoryList;