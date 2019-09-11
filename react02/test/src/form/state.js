import React,{Fragment,Component} from 'react'

class Hehe extends Component{
    constructor(){
        super()
        this.state={
            name:'灰太狼',
            age:16
        }
    }
    submit(){
        console.log(this.state)
    }
    render(){
        return(
            <p>
                <input type='text' value={this.state.name} onChange={(e)=>{
                    console.log(e.target.value)
                    this.setState({name:e.target.value})
                }}/>
                <input type='text' value={this.state.age} onChange={(e)=>{
                    console.log(e.target.value)
                    this.setState({age:e.target.value})
                }}/>
                <button onClick={this.submit}>提交</button>
            </p>
        )        
    }
}
export default Hehe