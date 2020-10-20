import React from 'react'
import {useState} from 'react'
import axios from 'axios'

function PostCreate() {
    const [title, setTitle] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
        await axios.post('http://posts.com/posts/create', {
            title 
        })

        setTitle('')
        window.location.reload(false)
    }
    return (
        <div style={{width : '50%' }}>
            <form onSubmit = {onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control"
                        value = {title}
                        onChange = {e => setTitle(e.target.value)}/>
                </div>
                <button className="btn btn-success">Create</button>
            </form>
        </div>
    )
}

export default PostCreate
