import React, {useState} from 'react'
import axios from 'axios'

function CommentCreate({postID}) {
    const [content, setContent] = useState('')

    const onSubmit = async (event)=> {
        event.preventDefault()

        await axios.post(`http://localhost:4001/posts/${postID}/comments`, {
            content
        })

        setContent('')
        window.location.reload(false)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Details</label>
                    <input 
                    className="form-control"
                    value = {content}
                    onChange = {e => setContent(e.target.value)}/>
                </div>
                <button className="btn btn-primary">Add Info</button>
            </form>
        </div>
    )
}

export default CommentCreate
