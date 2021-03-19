const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()

//routes
const vendorRouter = require('./routes/vendor');
const shopRouter = require('./routes/shop');
const adminRouter = require('./routes/admin');

//controllers
const error = require('./controllers/error');

//models
const Vendor = require('./models/vendor');

//middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(vendorRouter);
app.use(shopRouter);
app.use('/admin', adminRouter);
app.use(error.get404);

mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(result => {
    app.listen('3000', () => {
        console.log('Listening on port 3000');
    });
}).catch(e => console.log(e));