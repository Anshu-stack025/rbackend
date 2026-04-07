const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookingController");

router.post("/", controller.createBooking);
router.get("/", controller.getBookings);
router.delete("/:id", controller.deleteBooking);

module.exports = router;