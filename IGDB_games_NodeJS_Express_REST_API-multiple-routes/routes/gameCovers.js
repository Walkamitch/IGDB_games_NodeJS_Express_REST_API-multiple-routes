const express = require("express");
const router = express.Router();
const characterController = require("../controllers/characterController");
/**
 * @swagger
 * /api/gamecovers:
 *   get:
 *     tags:
 *        - Covers
 *     summary: Get all covers - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single cover
 */
router.get("/", characterController.getAllCharacters);

/**
 * @swagger
 * /api/gamecovers/{gamecover_id}:
 *   get:
 *     tags:
 *        - Covers
 *     summary: Get all gamecovers - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single cover
 */
router.get("/:id", characterController.getCharacterById);

module.exports = router;
