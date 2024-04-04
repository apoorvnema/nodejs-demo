const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/add-product', (req, res) => {
    res.send("<form action='/product' method='POST'><input type='text' name='item' placeholder='Enter item name here'><br><input type='number' name='size' placeholder='Enter item size here'><br><button type='submit'>Add</button></form>")
})

app.post('/product', (req, res) => {
    const itemDetails = req.body;
    console.log(itemDetails);
    res.redirect('/add-product');
})

app.listen(3000);

