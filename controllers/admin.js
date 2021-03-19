const Vendor = require("../models/vendor");

exports.getCreateVendor = (req, res, next) => {
    res.render('admin/create-vendor', {
        pageTitle: 'create-vendor',
        path: 'admin/create-vendor'
    });
};