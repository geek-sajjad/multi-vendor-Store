const Vendor = require("../models/vendor");

exports.getIndex = (req, res, next) => {
    Vendor.find().then(vendors => {
        console.log(vendors);
        res.render('shop/index', {
            vendors,
            pageTitle: 'Vendors',
            path: '/'
        });
    }).catch(e => console.log(e));
};