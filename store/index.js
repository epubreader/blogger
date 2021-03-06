export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'zh',
  isLogin: false, //是否处于登陆状态
  userInfo: '', //用户信息
})
export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_LOGIN(state, value) {
    state.isLogin = value
  },
  SET_USER_INFO(state, value) {
    state.userInfo = value
  }
}
