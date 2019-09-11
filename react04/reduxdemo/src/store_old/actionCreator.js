import Store from './store'

export default {
    changeName(params){
        // 创建action,type是必须的
        let action ={
            type:'CHANGE_NAME',
            params:params
        }
        console.log('action创建者',action)
        // 通过dispatch 将action 提交给store(老佛爷)
        Store.dispatch(action)
    }
}