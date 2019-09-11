import React,{Component} from 'react'
import ActionCreator from './actionCreator'

class Change extends Component{
    change(){
        ActionCreator.changeName('零二')
    }
    render(){
        return(
            <div>
                <h6>修改全局状态值</h6>
                <button onClick={this.change}>改名</button>
            </div>
        )
    }
}
export default Change