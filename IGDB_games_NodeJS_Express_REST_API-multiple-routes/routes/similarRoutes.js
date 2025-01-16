const express = require("express");
const router = express.Router();
const similarController = require("../controllers/similarController");
/**
 * @swagger
 * /api/similars:
 *   get:
 *     tags:
 *        - Similars
 *     summary: Get all similars - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single similar
 */
router.get("/", similarController.getAllSimilarGames);

/**
 * @swagger
 * /api/similars/{similar_id}:
 *   get:
 *     tags:
 *        - Similars
 *     summary: Get all similars - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single similar
 */
router.get("/:id", similarController.getSimilarByGameId);

module.exports = router;
