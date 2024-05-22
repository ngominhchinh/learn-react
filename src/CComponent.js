import React,{Component} from 'react';
class CComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            y:20,
         }
    }
    upY = ()=>{
        this.setState({
            y:this.state.y+1
        })
    };
    render() {
        return (
            <>
                <h1>Component Y {this.state.y}</h1>
                <button onClick={this.upY}>Up Y</button>
            </>
        )
    }
}
export default CComponent;
