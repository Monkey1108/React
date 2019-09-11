import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer)
// 创建全剧状态对象，并且和 reducer 进行关联
export default store