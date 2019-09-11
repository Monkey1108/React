import React,{Component} from 'react'
import './list.css'

class List extends Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    initData(sea){
        setTimeout(()=>{
            let obj={
                '路飞':['船长'],
                '索隆':['剑豪'],
                '山治':['厨师']
            }
            let list = obj[sea]
            this.setState({list})
        },500)
    }
    shouldComponentUpdate(props,state){
        if(JSON.stringify(state.list) === JSON.stringify(this.state.list)){
            return false
        }else{
            return true
        }
    }
    componentWillReceiveProps(props){
        this.initData(props.sea)
    }
    componentDidUpdate(){
        this.initData(this.props.sea)
    }
    componentDidMount(){
        let sea=this.props.sea
        this.initData(sea)
    }
    render(){
        return(
            <div className='list'>
                <ul>
                    {this.state.list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default List