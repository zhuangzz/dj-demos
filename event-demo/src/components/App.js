import React,{Component} from "react"
import "./app.css"

class App extends Component{
  state={
    count:0
  }
  Sayhello =()=>{
    console.log("haha hello")
  }
  Oneclick =()=>{
    alert("标题被单击了")
  }
  ChangeCount=()=>{
    this.setState({
      count: this.state.count + 1
    })
  }
  ChangeMid=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  render(){
    return(<div className="app">
      <button onClick={this.Sayhello} className="cli">点击</button>
      <h1 onClick={this.Oneclick}>标题</h1>

      <h1>{this.state.count}</h1>
      <button onClick={this.ChangeMid}>-</button>
      <button onClick={this.ChangeCount}>+</button>
    </div>)
  }
}

export default App
