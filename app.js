const express = require('express');
const app = express();

const vendorRouter = require('./routes/vendor');
const shopRouter = require('./routes/shop');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(vendorRouter);
app.use(shopRouter);




app.listen('3000', () => {
    console.log('Listening on port 3000');
});