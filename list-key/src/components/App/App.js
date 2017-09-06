import React ,{Component} from "react"
import "./app.css"
class App extends Component{
  state = {
  size : [
    {size:"M"} ,
    {size:"L"}  ,
    {size:"XL"}  ,
    {size:"XXL"}],
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
         >{`${item.size}`}</li>
    ))
    return (
      <ul className='app' >
        {list}
        </ul>
    )
  }
}
export default App
