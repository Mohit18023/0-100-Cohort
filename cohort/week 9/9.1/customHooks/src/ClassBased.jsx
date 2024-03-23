import React from 'react';
export class ClassBased extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = () =>{
        this.setState({count: this.state.count+1});

    }

    render(){
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        )
    }
}