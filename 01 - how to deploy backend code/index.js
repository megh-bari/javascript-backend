require('dotenv').config()

const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  "login": "megh-bari",
  "id": 142393952,
  "node_id": "U_kgDOCHzCYA",
  "avatar_url": "https://avatars.githubusercontent.com/u/142393952?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/megh-bari",
  "html_url": "https://github.com/megh-bari",
  "followers_url": "https://api.github.com/users/megh-bari/followers",
  "following_url": "https://api.github.com/users/megh-bari/following{/other_user}",
  "gists_url": "https://api.github.com/users/megh-bari/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/megh-bari/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/megh-bari/subscriptions",
  "organizations_url": "https://api.github.com/users/megh-bari/orgs",
  "repos_url": "https://api.github.com/users/megh-bari/repos",
  "events_url": "https://api.github.com/users/megh-bari/events{/privacy}",
  "received_events_url": "https://api.github.com/users/megh-bari/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Megh Bari",
  "company": null,
  "blog": "https://meghbari.vercel.app/",
  "location": "Mumbai (INDIA)",
  "email": null,
  "hireable": null,
  "bio": "🚀 Let's code, build, and innovate together! ",
  "twitter_username": "megh_bari",
  "public_repos": 26,
  "public_gists": 0,
  "followers": 91,
  "following": 100,
  "created_at": "2023-08-16T09:08:58Z",
  "updated_at": "2024-12-14T13:45:53Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("megh_bari");
});

app.get('/login', (req,res)=>{
res.send('<h1>please login</h1>')
})

app.get('/meghbari', (req,res)=>{
    res.send('<b>Megh Bari</b>')
})

app.get('/github', (req, res)=>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

