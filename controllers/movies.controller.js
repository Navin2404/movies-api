import Movie from "../models/movie.model.js"

export const movieIndex = async (req,res)=> {

    try{
        const movies = await Movie.find() 
        res.json(movies)
    }catch (error){
        res.status(500).json({ message: error.message })
    }
};


export const movieCreate = async(req,res)=> {

    console.log(req.body);
    // validations
    const newMovie = new Movie({
        title : req.body.title,
        desc : req.body.desc
    });

    try{
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    }catch(error) {
        return res.status(400).json({ message : error.message})
    }

};

// single movie detail
export const movieDetail = async (req,res) => {
    try{
        const movie = await Movie.findById(req.params.id)

        if (movie == null){
            return res.status(404).json({ message : "cannot find movie"})
        }else{
            res.json(movie)
        }
    }catch (error){
        return res.status(500).json({ message: error.message });
    }
    res.json({ msg: "movie detail showed successfully" })
};

// update functionality
export const movieupdate = async (req, res) => {
  try {
    const result = await Movie.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      { new: true, runValidators: true } // 👈 important
    );

    if (!result) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




// delete functionality
export const moviedelete = (req, res)=> {
    res.json({ msg: "movie deleted successfully"})
};


