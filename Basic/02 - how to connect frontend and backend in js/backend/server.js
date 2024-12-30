import express from 'express'

const app = express()

// app.get('/', (req, res)=>{
//     res.send("server is ready")
// })

// get a list of 5 jokes

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
          id: 1,
          title: "The Computer's Breakfast",
          content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
          id: 2,
          title: "The Math Teacher's Favorite Tree",
          content: "What kind of tree does a math teacher climb? A geometry!"
        },
        {
          id: 3,
          title: "HTML and Emotions",
          content: "Why was the HTML element feeling so sad? It didn’t have enough class!"
        },
        {
          id: 4,
          title: "The Developer's Favorite Dance",
          content: "Why do developers love to dance? Because they love to breakpoints!"
        },
        {
          id: 5,
          title: "The Fast Food Developer",
          content: "Why did the developer go broke? Because they used up all their cache!"
        }
      ];

      res.send(jokes)
      
})


const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`server at https://localhost:${port}`)
})