import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            messages: [
                'Hullo thar, hows it going?',
                'Not too bad. And yousa?'
            ]
        };
    }

    render(){
        var messageNodes = this.state.messages.map((message)=> {
            return (
                <div style={{color: 'blue'}}>{message}</div>
            );
        });
        return (
            <div>{messageNodes}</div>
        );
    }
}

export default App;