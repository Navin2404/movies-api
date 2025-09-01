import express from 'express';
import movieRoutes from "./routes/movies.route.js"
import connectDB from './lib/db.js';

const app = express()
const PORT = 6969;

// connect db
connectDB

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true }));


app.get('/', (req,res)=>{
    res.json({msg: "Hello alllll.."})
})

// middleware
// client --> middleware --> server
app.use('/movies', movieRoutes);

app.listen(PORT, ()=> {
    console.log(`The port is running at http://localhost:${PORT}`);
});