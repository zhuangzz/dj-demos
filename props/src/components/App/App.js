import React ,{Component} from "react"
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import "./app.css"


class App extends Component{
  render(){
    return(<div className="app">
      <Login />
      <Signup />
    </div>)
  }
}
export default App
