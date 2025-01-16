const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/gameController");

/**
 * @swagger
 * /api/games:
 *   get:
 *     tags:
 *        - Games
 *     summary: Get all games - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single game
 */
router.get("/", gamesController.getAllGames);

/**
 * @swagger
 * /api/games/{game_id}:
 *   get:
 *     tags:
 *        - Games
 *     summary: Get all games - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single game
 */
router.get("/:id", gamesController.getGameById);

module.exports = router;
