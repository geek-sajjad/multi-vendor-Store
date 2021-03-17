const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const vendors = [{
        id: 1,
        name: 'Vendore 1',
        slug: 'vendor-1',
        products: []
    }];
    res.render('index');
});

app.listen('3000', () => {
    console.log('Listening on port 3000');
});