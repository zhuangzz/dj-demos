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
    checked: false,
    background:"none",
    active:false,
    active1:false
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
  handleColor=()=>{
    this.setState({
      background:"yellow"
    })
  }
  handleColors=()=>{
    this.setState({
      active: !this.state.active
    })
  }
  handleSiderbar=()=>{
    this.setState({
      active1: !this.state.active1
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
      <div className="color1" onClick={this.handleColor} style={{background:this.state.background}}>456</div>
      <div onClick={this.handleColors} className={`colorr ${this.state.active&&"active"}`}>789</div>
      <div className="siderbar">
        <span className={`left ${this.state.active1&&"act"}`}></span>
        <span className={`right ${this.state.active1&&"act"}`}>
          <button onClick={this.handleSiderbar}></button>
        </span>
      </div>
</div>)
  }
}

export default App
