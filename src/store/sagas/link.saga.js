// src/store/sagas/article.saga.js
import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'

function * addLink({ name, link}) {
    // www.baidu.com => http://www.baidu.com
    link = !link.startsWith('http') ? `https://${link}` : link
    // http://www.baidu.com/a/b/c/d => http://www.baidu.com/
    let logoLink = link.match(/(http(s?)\:\/\/)?(\S+).(com|cn|net|org|top|vip|gov|edu)(\/?)/i)[0]
    // http://www.baidu.com => http://www.baidu.com/favicon.ico
    logoLink = logoLink.endsWith('/') ? `${logoLink}favicon.ico` : `${logoLink}/favicon.ico`
    function validateImage(pathImg) {
        return new Promise ((res, rej) => {
            const img = new Image()
            img.src = logoLink
            // 加载成功 图片路径正确
            img.addEventListener('load', res)
            // 加载失败 图片路径错误
            img.addEventListener('error', rej)
        })
    }
    try {
        yield validateImage(link)
        yield put({ type: 'LoadLinkSuccess', payload: { link, name, logoLink }})
    } catch (e) {
        yield put({ type: 'LoadLinkFailed', payload: { link, name }})
    }
}

export default function * articleSaga () {
    yield takeEvery('addLink', addLink)
}