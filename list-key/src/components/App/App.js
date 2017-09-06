import React ,{Component} from "react"
import "./app.css"
import logo from "./bag.svg"

class App extends Component{
  state = {
  size : ["M" ,"L" ,"XL","XXL"],
  activeIndex:0
  }
  handleChose=(i)=>{
    this.setState({
      activeIndex:i
    })
    console.log(this.state.activeIndex)
  }

  render () {
    const list=this.state.size.map((item,i) => (
      <li key={i} onClick={()=>this.handleChose(i)} className={`lis ${i===this.state.activeIndex && "active"}`}
         >{`${item}`}</li>
    ))
    return (
      <div>
        <ul className='app' >
          {list}
        </ul>
        <img className="logo" src={logo} alt="logo"/>
      </div>

    )
  }
}
export default App
