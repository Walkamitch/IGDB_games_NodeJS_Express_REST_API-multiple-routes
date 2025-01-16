const express = require("express");
const router = express.Router();
const screenshotController = require("../controllers/screenshotController");
/**
 * @swagger
 * /api/screenshots:
 *   get:
 *     tags:
 *        - Screenshots
 *     summary: Get all screenshots - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single screenshot
 */
router.get("/", screenshotController.getAllScreenshots);

/**
 * @swagger
 * /api/screenshots/{screenshot_id}:
 *   get:
 *     tags:
 *        - Screenshots
 *     summary: Get all screenshots - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single screenshot
 */
router.get("/:id", screenshotController.getScreenshotById);

module.exports = router;
