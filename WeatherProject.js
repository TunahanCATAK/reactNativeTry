import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";
import getUser from "./get_user";

class WeatherProject extends Component {

    constructor(props, wc){
        super(props);

        this.state = {text : "", id: 1};
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            this.setState({zip: zip});
            console.log(forecast);
            this.setState({forecast: forecast});
        });
    };

    _sayHello = () => {
        getUser.fetchData(this.state.id).then(text => {
            //let obj = JSON.parse(text);
            alert(text);
            this.setState({text: text});
            this.setState({id: this.state.id+1});
        });
         
    }

    render() {
        let list = null;

        // let content = null;
        // if (this.state.weatherModel !== null) {
        //     content = (
        //         <Forecast
        //             main = {this.state.weatherModel.main}
        //             description = {this.state.weatherModel.description}
        //             temp = {this.state.weatherModel.temp}
        //         />
        //     );
        // }

        return (
            <View style = {styles.container}>
                <Button
                onPress={this._sayHello}
                title="Press me"
                color="#841584"
                accessibilityLabel="Press this button"
                />

                <Text style = {styles.welcome}>
                         You input.
                </Text> 
            </View>


            // <View style = {styles.container}>
            //     <Text style = {styles.welcome}>
            //         You input {this.state.zip}.
            //     </Text>
            //     {content}
            //     {

            //     }
            // </View>
        );
    }

}


const styles = StyleSheet.create({

    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#666666"
    },
    welcome: {  fontSize: 20, textAlign: "center", margin: 10},
    input: {
        fontSize: 20,
        borderWidth: 2, 
        padding: 2, 
        height: 40, 
        width: 100, 
        textAlign: "center"
    }
});

export default WeatherProject; 