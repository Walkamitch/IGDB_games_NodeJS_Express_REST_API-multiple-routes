const express = require("express");
const router = express.Router();
const websiteController = require("../controllers/websiteController");
/**
 * @swagger
 * /api/websites:
 *   get:
 *     tags:
 *        - Websites
 *     summary: Get all websites - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single website
 */
router.get("/", websiteController.getAllWebsites);

/**
 * @swagger
 * /api/websites/{website_id}:
 *   get:
 *     tags:
 *        - Websites
 *     summary: Get all websites - default limit is 50
 *     parameters:
 *        - in: query
 *          name: start
 *        - in: query
 *          name: limit
 *     responses:
 *       200:
 *         description: A single website
 */
router.get("/:id", websiteController.getWebsiteById);

module.exports = router;
