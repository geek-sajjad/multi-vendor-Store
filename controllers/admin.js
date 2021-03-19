const Vendor = require("../models/vendor");

exports.getCreateVendor = (req, res, next) => {
    res.render('admin/create-vendor', {
        pageTitle: 'create-vendor',
        path: 'admin/create-vendor'
    });
};

exports.postCreateVendor = (req, res, next) => {
    Vendor.create({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        products: [{
            title: 'Product one',
            price: 12.99,
            description: 'regkjekhjekgjenhkeh',
            imageUrl: 'dklfhjdlkhdjh',
        }]
    }).then(result => {
        res.redirect('/');
    }).catch(e => console.log(e));
};