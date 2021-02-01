// 全局变量

export default {
  namespaced: true,
  state: () => ({
    isCollapse: false,
    sideBarWidth: '200px'
  }),
  mutations: {
    splitCollapse(state) {
      state.isCollapse = !state.isCollapse
      state.sideBarWidth = state.isCollapse ? '60px' : '200px'
    }
  }
}
