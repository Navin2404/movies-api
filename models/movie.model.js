import { Schema, model } from "mongoose";

const schema  = new Schema({
    title: {
        type:String,
        required: true,
        unique: true
    },
    desc: {
        type:String,
        required: true,
    },   
});

// create your model
const movie = model("movie", schema);

export default movie
