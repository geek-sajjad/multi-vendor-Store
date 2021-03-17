exports.getVendors = (req, res, next) => {
    res.send('vendors');
};

exports.getVendor = (req, res, next) => {
    const id = req.params.id;
    res.send(id);
};