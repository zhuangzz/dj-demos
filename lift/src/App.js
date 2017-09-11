import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={
    num:0
  }

  componentDidMount=()=>{
    console.log("componentDidMount...")
  }
  componentWillMount=()=>{
    console.log("componentWillMount...")
  }
  componentWillUnmount=()=>{
    console.log("conponentWillUnmount.")
  }
  componentDidUpdate=()=>{
    console.log("componentDidUpdate...")
  }
  componentWillUpdate=()=>{
    console.log("componentWillUpdate...")
  }

  handleAdd=()=>{
    this.setState({
      num: this.state.num + 1
    })
  }



  render() {
    console.log("render..")
    const { num }=this.state
    return (
      <div className="App">
        <h1 className="add" onClick={this.handleAdd}>{num}</h1>
      </div>
    )
  }
}

export default App;
