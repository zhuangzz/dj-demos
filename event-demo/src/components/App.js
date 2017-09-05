import React,{Component} from "react"
import "./app.css"

class App extends Component{
  state={
    count:0,
    comments: [
      {
        name: 'peter',
        text: '你好'
      },
      {
        name: 'billie',
        text: 'Hi'
      }
    ],
    checked: false
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
  ChangeColor=()=>{
    this.setState({
       checked: !this.state.checked
    })
  }
  render(){
    const list = this.state.comments.map((item, i) => (
      <li key={i}>{`${item.name}: ${item.text}`}</li>
    ))
    const style={backgroundColor: this.state.checked ? 'yellow' : 'blue'}
    return(<div className="app">
      <button onClick={this.Sayhello} className="cli">点击</button>
      <h1 onClick={this.Oneclick}>标题</h1>

      <h1>{this.state.count}</h1>
      <button onClick={this.ChangeMid}>-</button>
      <button onClick={this.ChangeCount}>+</button>
      <ul className='app1'>
         {list}
      </ul>
      <div className="color" onClick={this.ChangeColor} style={style}>123</div>
    </div>)
  }
}

export default App
