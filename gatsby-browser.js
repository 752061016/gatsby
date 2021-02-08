// 该文件的内容会在客户端应用运行时被调用
const React = require("react")
const { Provider } = require("react-redux")
const createStore = require("./src/store/createStore").default

exports.wrapRootElement = ({ element }) => {
    return <Provider store={createStore()}>{ element }</Provider>
}