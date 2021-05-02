import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 17
        };
        this.nextYear = this.nextYear.bind(this);
        // this.nextYear = () => {
        //     this.setState(state => ({
        //         years: ++state.years
        //     }));
        // };
    }
    // nextYear = () => {
    //     let oldYear = this.state.years;
    //     const newYear = ++oldYear;
    //     this.setState({
    //         years: newYear
    //     });
    // }
    nextYear() {
        this.setState(state => ({
            years: ++state.years
        }));
    }
    render() {
        const {name, surname, href} = this.props;
        const {years} = this.state;
        return (
            <>
                <button onClick={this.nextYear}>Click</button>
                <h1>My name is {name} , surname - {surname}, years: {years}</h1>
                <a href={href}>My profile</a>
            </>
        );
    }
}

const All = () => {
    return (
        <>
            <WhoAmI name="Azamat" surname="Askarov" href="https://www.youtube.com/watch?v=DXpfrmHmJIM" />
            <WhoAmI name="haha" surname="Asdfskarov" href="https://www.youtube.com/watch?v=DXpfrmHmJIM" />
            <WhoAmI name="etest" surname="dsf" href="https://www.youtube.com/watch?v=DXpfrmHmJIM" />
        </>
    );
};

ReactDOM.render(<All />, document.getElementById('root'));

