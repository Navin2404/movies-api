import express from 'express';

const app = express()
const PORT = 6969;

app.get('/', (req,res)=>{
    res.json({msg: "this is get route..."})
})


app.listen(PORT, ()=> {
    console.log(`The port is running at http://localhost:${PORT}`);
});