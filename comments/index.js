const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {}

app.get('/posts/:id/comments', (req,res) => {
    res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', (req,res) => {
    const commentID = randomBytes(4).toString('hex')
    const {content} = req.body

    const comments = commentsByPostId[req.params.id] || []
    comments.push({ id : commentID, content})

    commentsByPostId[req.params.id] = comments

    axios.post('http://localhost:4005/events', {
        type : 'CommentCreated',
        data : {
            id : commentID,
            content,
            postID : req.params.id
        }
    })

    res.status(201).send(comments)
})

app.post('/events', (req,res) => {
    console.log('Event Received', req.body.type)
    res.send({})
})

app.listen(4001, () => {
    console.log("Server on port 4001")
})