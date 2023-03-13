import React from "react";
import MyInput from "./UI/inputs/MyInput";
import MyButton from "./UI/buttons/MyButton";
import { useState } from "react";


const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form>

            {/* Управляемый компонент */}
            <MyInput
                onChange={e => setPost({ ...post, title: e.target.value })}
                value={post.title}
                type='text'
                placeholder="Название поста" />


            {/* {Неуправляемый\Неконтролируемый компонент } */}
            <MyInput
                onChange={e => setPost({ ...post, body: e.target.value })}
                value={post.body}
                type='text'
                placeholder="Описание поста" />

            <MyButton onClick={addNewPost}>Создать пост</MyButton>

        </form>
    )
}

export default PostForm;