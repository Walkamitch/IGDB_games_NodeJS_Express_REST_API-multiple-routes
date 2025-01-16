const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController");
/**
 * @swagger
 * /api/characters:
 *   get:
 *     tags:
 *        - Characters
 *     summary: Get all characters - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single character
 */
router.get("/", characterController.getAllCharacters);

/**
 * @swagger
 * /api/characters/{character_id}:
 *   get:
 *     tags:
 *        - Characters
 *     summary: Get all characters - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single character
 */
router.get("/:id", characterController.getCharacterById);

module.exports = router;
