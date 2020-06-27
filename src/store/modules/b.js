// 仓库模块B
export default {
    namespaced: true,
  
    state: {
      name: '李四丰'
    },
  
    getters: {
      bnameLength (state) {
        return state.name.length
      }
    },
  
    mutations: {
      hello () {
        console.log('hello b')
      }
    },
  
    actions: {
      world () {
        console.log('world b')
      }
    }
  }
  