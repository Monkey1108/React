import React,{Fragment,Component} from 'react'

class Hello extends Component{
    constructor(){
        super() //执行父类的构造函数
        this.state={
            name:'小灰灰'
        }
    }
    render(){
        console.log('render',this)
        return(
            <div>
                这里是box组件
            </div>
        )
    }
}
export default Hello