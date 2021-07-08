import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        //this is the only time we do direct assignment to this.state
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(

            //position below is 'giving the callback'
            (position) => {
                this.setState({lat: position.coords.latitude});  
            },
            (err) => {
                this.setState({errorMessage: err.message })
            }
        );
    }
    render() {
        //returning from the constructor function
        if (this.state.errorMessage && !this.state.lat) {
            return <div> {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div> Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>;
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));

//conditional rendering