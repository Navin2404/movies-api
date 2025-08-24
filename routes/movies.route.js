import express from 'express';
import { movieCreate, moviedelete, movieIndex, movieupdate } from '../controllers/movies.controller.js';


const router = express.Router();
// crud functionalities - rest api

// for getting movie list
router.get('/', movieIndex)

// for posting new movie
router.post('/', movieCreate )

// for updating old detail
router.put('/', movieupdate)

// for deleting old record
router.delete('/', moviedelete)

export default router;