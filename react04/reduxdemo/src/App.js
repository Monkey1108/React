import React,{Component} from 'react';
// import Store from './store/store'
// import Change from './store/change'

// class App extends Component{
//   componentDidMount(){
//     Store.subscribe(()=>{
//       console.log('全剧状态值改变触发的监听')
//       this.setState({})
//     })
//   }
//   render(){
//     console.log(this,Store)
//     console.log(Store.getState())
//     let {name} = Store.getState()
//     return(
//       <div>
//         <h3>redux</h3>
//         {name}
//         <hr/>
//         <Change></Change>
//       </div>
//     )
//   }
// }

////////////////////
import ShowNum from './num/showNum'
import ChangeNum from './num/changeNum'

function App(){
  return(
    <div>
      <ShowNum></ShowNum>
      <ChangeNum></ChangeNum>
    </div>
  )
}

export default App;
