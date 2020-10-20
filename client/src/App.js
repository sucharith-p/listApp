import React from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'

function App() {
    return (
        <div className="container">
            <h1 style={{marginTop : 50}}>Create Lists</h1>
            <PostCreate />
            <hr/>
            <h1 style={{marginBottom : 20}}>All Lists</h1>
            <PostList />
        </div>
    )
}

export default App
