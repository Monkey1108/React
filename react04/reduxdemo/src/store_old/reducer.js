import State from './state'

export default (prestate = State,action)=>{
    // 根据action 修改全局状态值
    // prestate 改变之前的全剧状态值
    // action 就是dispatch 的action
    console.log('老佛爷数据修改',action)
    let newdata = prestate
    let  {type,params} = action
    switch (type) {
        case 'CHANGE_NAME':
            newdata.name = params
            break;
        default:
            break;
    }
    console.log('修改后的数据',newdata)
    return newdata
}