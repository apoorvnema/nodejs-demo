const express = require("express");

const router = express.Router();

router.get('/add-product', (req, res) => {
    res.send("<form action='/admin/add-product' method='POST'><input type='text' name='item' placeholder='Enter item name here'><br><input type='number' name='size' placeholder='Enter item size here'><br><button type='submit'>Add</button></form>")
})

router.post('/add-product', (req, res) => {
    const itemDetails = req.body;
    console.log(itemDetails);
    res.redirect('/shop/');
})

module.exports = router;