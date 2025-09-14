// Routes for webhook

const express = require("express");
const {
  verifyWebhook,
  handleWebhookEvent,
} = require("../controllers/webhookController");

const router = express.Router();

// Define routes
router.get("/", verifyWebhook);
router.post("/", handleWebhookEvent);

module.exports = router;
