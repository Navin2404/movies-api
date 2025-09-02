import express from 'express';
import { movieCreate, moviedelete, movieDetail, movieIndex, movieupdate } from '../controllers/movies.controller.js';


const router = express.Router();
// crud functionalities - rest api

// for getting movie list
router.get('/', movieIndex)

// for posting new movie
router.post('/', movieCreate )

// single movie detail
router.get("/:id", movieDetail)

// for updating old detail
router.put('/:id',movieupdate)

// for deleting old record
router.delete('/:id', moviedelete)


export default router;