import React, { Component } from "react";


class Cell extends Component {
    state = {
        color:this.props.value
    }
    renderColor = () => {
        this.setState({
            color: '#333'
        })
    }
    render(){
        return <div onClick={this.renderColor} className='cell' style={{backgroundColor: this.state.color}}></div>
    }
}

export default Cell;