import React from 'react';
import './App.css';
import Header from './Header/Header';
import ResultsContainer from './ResultsContainer/ResultsContainer';
import SeachBox from './SearchBox/SearchBox';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: [],
    };

    //handling input text and passing true or false from !inpuText to child
    handleInputChange = (inputText) => {
        // this.setState({ headerExpanded: inputText.length > 0 ? false : true });
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SeachBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App;