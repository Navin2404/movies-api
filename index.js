(import express from 'express';

const app = express()
const PORT = 6969;

app.get('/', (req,res)=>{
    res.json({msg: "this is get route..."})
})

// crud functionalities - rest api

// for getting movie list
app.get('/movies', (req,res)=> {

})

// for posting new movie
app.post('/movies', (req,res)=>{

})

// for updating old detail
app.put('/movies/:id', (req,res)=>{

})

// for deleting old record
app.delete('/moives/:id', (req,res)=>{

})


app.listen(PORT, ()=> {
    console.log(`The port is running at http://localhost:${PORT}`);
});