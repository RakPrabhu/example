require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const gitdata=
    {
        "login": "RakPrabhu",
        "id": 156403468,
        "node_id": "U_kgDOCVKHDA",
        "avatar_url": "https://avatars.githubusercontent.com/u/156403468?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/RakPrabhu",
        "html_url": "https://github.com/RakPrabhu",
        "followers_url": "https://api.github.com/users/RakPrabhu/followers",
        "following_url": "https://api.github.com/users/RakPrabhu/following{/other_user}",
        "gists_url": "https://api.github.com/users/RakPrabhu/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/RakPrabhu/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/RakPrabhu/subscriptions",
        "organizations_url": "https://api.github.com/users/RakPrabhu/orgs",
        "repos_url": "https://api.github.com/users/RakPrabhu/repos",
        "events_url": "https://api.github.com/users/RakPrabhu/events{/privacy}",
        "received_events_url": "https://api.github.com/users/RakPrabhu/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 5,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2024-01-12T06:03:36Z",
        "updated_at": "2024-05-17T17:07:47Z"
      }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('rakshi')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login </h1>')
})

app.get('/chai',(req,res)=>{
    res.send('<h2>hello chai</h2>')
})

app.get('/rakshi',(req,res)=>{
    res.json(gitdata)
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})