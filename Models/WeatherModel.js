class WeatherModel {

    constructor(zip, main, description, tempreture) {
        this.state = { zip: zip, main: main, description: description, tempreture: tempreture};
    }

    get Zip (){
        return this.state.zip;
    }

    
}

export default WeatherModel;