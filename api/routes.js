const express = require("express")
const Names = require("./Model/Names")
const Phase = require("./Model/Phase")
const router = express.Router()
router.use(express.json())

// Get all posts
router.get("/users", async (req, res) => {
    Names.find({},'-_id')
  .then(items => {
    res.status(200).json(items);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data', error: err });
  });
})

router.get("/phases", async(req, res) => {
  Phase.find({},'-_id')
  .then(items => {
    res.status(200).json(items);
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data', error: err });
  });
})



// Export the router
module.exports = router;