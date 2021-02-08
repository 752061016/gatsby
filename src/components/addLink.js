import React from 'react'
import styles from "../styles/index.module.less"
import useInput from "../hooks/input.hook"
import { useDispatch, useSelector } from 'react-redux'

export default function Add ({ addStatus, setAddStatus }) {
    const cont = {
        display: addStatus ? 'block' : 'none'
    }
    const dispatch = useDispatch()
    // 初始化名称
    const nameInput = useInput('')
    // 初始化网址
    const linkInput = useInput('')

    async function handleAdd (name, link) {
        if (!name.trim() || !link.trim()) return alert('请输入名称与网址')
        await dispatch({
            type: 'addLink',
            name,
            link
        })
        // 清空并关闭输入框
        nameInput.setValue('')
        linkInput.setValue('')
        setAddStatus(false)
    }
    return (
        <div className={styles.addCont} style={ cont }>
            <div className={styles.addIcon}>
                <div className={styles.title}>添加快捷方式</div>
                <div className={styles.addInput}>
                    名称
                    <input {...nameInput.input} />
                </div>
                <div className={styles.addInput}>
                    网址
                    <input {...linkInput.input} />
                </div>
                <div className={styles.addInput}>
                    <button onClick={() => setAddStatus(false)}>删除</button>
                    <button style={{float: 'right'}} onClick={() => handleAdd(nameInput.input.value, linkInput.input.value)}>完成</button>
                    <button onClick={() => setAddStatus(false)} style={{float: 'right', marginRight: 10}}>取消</button>
                </div>
            </div>
        </div>
    )
}