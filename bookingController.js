const db = require("../db");

// CREATE
exports.createBooking = (req, res) => {
  const data = req.body;

  const sql = `INSERT INTO table_booking SET ?`;

  db.query(sql, data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Booking Created");
  });
};

// READ ALL
exports.getBookings = (req, res) => {
  db.query("SELECT * FROM table_booking", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

// DELETE
exports.deleteBooking = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM table_booking WHERE booking_id=?", [id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Deleted");
    });
};