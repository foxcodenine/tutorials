export { default as Box } from '../..\\components\\Box.vue'
export { default as BoxGrid } from '../..\\components\\BoxGrid.vue'
export { default as CloseAll } from '../..\\components\\CloseAll.vue'
export { default as HeaderBar } from '../..\\components\\HeaderBar.vue'
export { default as NotSupported } from '../..\\components\\NotSupported.vue'
export { default as TextBox } from '../..\\components\\TextBox.vue'
export { default as NewBox } from '../..\\components\\forms\\NewBox.vue'
export { default as SignIn } from '../..\\components\\forms\\SignIn.vue'
export { default as SignUp } from '../..\\components\\forms\\SignUp.vue'

export const LazyBox = import('../..\\components\\Box.vue' /* webpackChunkName: "components_Box" */).then(c => c.default || c)
export const LazyBoxGrid = import('../..\\components\\BoxGrid.vue' /* webpackChunkName: "components_BoxGrid" */).then(c => c.default || c)
export const LazyCloseAll = import('../..\\components\\CloseAll.vue' /* webpackChunkName: "components_CloseAll" */).then(c => c.default || c)
export const LazyHeaderBar = import('../..\\components\\HeaderBar.vue' /* webpackChunkName: "components_HeaderBar" */).then(c => c.default || c)
export const LazyNotSupported = import('../..\\components\\NotSupported.vue' /* webpackChunkName: "components_NotSupported" */).then(c => c.default || c)
export const LazyTextBox = import('../..\\components\\TextBox.vue' /* webpackChunkName: "components_TextBox" */).then(c => c.default || c)
export const LazyNewBox = import('../..\\components\\forms\\NewBox.vue' /* webpackChunkName: "components_forms/NewBox" */).then(c => c.default || c)
export const LazySignIn = import('../..\\components\\forms\\SignIn.vue' /* webpackChunkName: "components_forms/SignIn" */).then(c => c.default || c)
export const LazySignUp = import('../..\\components\\forms\\SignUp.vue' /* webpackChunkName: "components_forms/SignUp" */).then(c => c.default || c)
