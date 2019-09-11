import React,{Fragment,Component} from 'react'
import NavComponent from './nav'
import List from './list'

class Box extends Component{
    constructor(){
        super() //执行父类的构造函数   
        this.state={
            defaultSel:'路飞'
        }    
    }
    shouldComponentUpdate(props,state){
        if(this.state.defaultSel===state.defaultSel){
            return false
        }else{
            return true
        }
    }
    changeNav=(item)=>{
        console.log(this)
        this.setState({defaultSel:item})
    }
    render(){
        // console.log('render',this)
        console.log('box render')
        let {defaultSel} = this.state
        return(
            <Fragment>
                <NavComponent sel={defaultSel} fun={this.changeNav}></NavComponent>
                <List sea={defaultSel}></List>
            </Fragment>
        )
    }
}
export default Box