import express from "express";

import moviesController from "../controllers/movie.js";

const router = express.Router();
// Define routes
router.get("/", moviesController.getMovies);
router.get("/:id", moviesController.getMovieById);
router.post("/", moviesController.postMovie);
router.put("/:id", moviesController.putMovie);
router.delete("/:id", moviesController.deleteMovie);

export default router;
