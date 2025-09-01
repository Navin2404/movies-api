export const movieIndex = (req,res)=> {
    res.json({ msg: "All movies listed here" })
};


export const movieCreate = (req,res)=> {

    console.log(req.body);
    return res.json(req.body);
    // res.json({ msg: " movies added success" })
};


export const movieupdate = (req,res)=> {
    res.json({ msg: "movie detail updated successfull" })
};


export const moviedelete = (req, res)=> {
    res.json({ msg: "movie deleted successfully"})
};


