import express from 'express';
import movieRoutes from "./routes/movies.route.js"

const app = express()
const PORT = 6969;

app.get('/', (req,res)=>{
    res.json({msg: "Hello all.."})
})

// middleware
// client --> middleware --> server
app.use('/', movieRoutes);

app.listen(PORT, ()=> {
    console.log(`The port is running at http://localhost:${PORT}`);
});