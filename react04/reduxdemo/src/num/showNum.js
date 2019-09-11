import React,{Component} from 'react'
import Store from '../store/store'

class ShowNum extends Component{
    // 创建监听
    componentDidMount(){
        Store.subscribe(()=>{
            this.setState({})
        })
    }
    render(){
        let {num,name} = Store.getState()
        return(
            <div>
                <h3>ShowNum</h3>
                {num}
                <br/>
                {name}
            </div>
        )
    }
}
export default ShowNum