const express = require("express");
const router = express.Router();
const gameModeController = require("../controllers/gamemodeController");
/**
 * @swagger
 * /api/gamemodes:
 *   get:
 *     tags:
 *        - Gamemodes
 *     summary: Get all gamemodes - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single gamemode
 */
router.get("/", gameModeController.getAllGameModes);
/**
 * @swagger
 * /api/gamemodes/{gamemode_id}:
 *   get:
 *     tags:
 *        - Gamemodes
 *     summary: Get all gamemodes - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single gamemode
 */
router.get("/:id", gameModeController.getGameModeById);

module.exports = router;
