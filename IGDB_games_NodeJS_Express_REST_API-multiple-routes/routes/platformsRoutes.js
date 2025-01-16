const express = require("express");
const router = express.Router();
const plaformController = require("../controllers/platformController");
/**
 * @swagger
 * /api/platforms:
 *   get:
 *     tags:
 *        - Platforms
 *     summary: Get all platforms - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single platform
 */
router.get("/", plaformController.getAllPlatforms);

/**
 * @swagger
 * /api/platforms/{platform_id}:
 *   get:
 *     tags:
 *        - Platforms
 *     summary: Get all platforms - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single platform
 */
router.get("/:id", plaformController.getPlatformById);

module.exports = router;
