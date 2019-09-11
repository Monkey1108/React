import State from './state'

export default (preState = State,action)=>{
    console.log('修改前的数据',preState)
    console.log('state.js',State)
    let newData = preState
    let {type,params} = action
    switch (type) {
        case 'hello':
            newData.num += 1
            break;
        case 'CHANGE_NAME':
            newData.name = params
            break;
        default:
            break;
    }
    console.log('修改后的值',newData)
    return newData //return 的值是全局状态值
}