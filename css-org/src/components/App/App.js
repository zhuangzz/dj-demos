import React, {Component} from "react"
import Header from "../Header/Header.js"
import Main from "../Main/Main.js"
import Footer from "../Footer/Footer.js"
import "./app.css"

class App extends Component{
  render(){
    return(<div className="app">
      <Header />
      <Main />
      <Footer />
      </div>)
  }
}
export default App
