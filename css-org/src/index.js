// 使用组件，create-react-app默认去index.js中找东西

import React from "react"
import ReactDom from "react-dom"
import App from "./components/App/App"
// 组件使用时要用<>括起来，而且要有斜杠
ReactDom.render(<App />,document.getElementById('root'))

// jsx是react 项目组自己发明的一种文件格式，作用可以在一个js文件中使用html语法写界面
// jsx中标签起名字不能用class 要用className
// 具体来说react中render语句中return中内容就是jsx
