const express = require("express");
const router = express.Router();
const genreController = require("../controllers/genreController");
/**
 * @swagger
 * /api/Genres:
 *   get:
 *     tags:
 *        - Genres
 *     summary: Get all Genres - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single genre
 */
router.get("/", genreController.getAllGenres);

/**
 * @swagger
 * /api/Genres/{genre_id}:
 *   get:
 *     tags:
 *        - Genres
 *     summary: Get all Genres - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single genre
 */
router.get("/:id", genreController.getGenreById);

module.exports = router;
