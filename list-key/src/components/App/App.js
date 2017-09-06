import React ,{Component} from "react"
import "./app.css"
class App extends Component{
  handleClick=(say)=>{
    console.log(`min ${say}`)
  }
  render(){
    let say="hello"
    return(
      <div className="app" onClick={()=>this.handleClick(say)}>
        click
      </div>
    )
  }
}
export default App
