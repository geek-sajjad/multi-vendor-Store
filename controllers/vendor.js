exports.getPanel = (req, res, next) => {
    res.render('vendor/panel', {
        pageTitle: 'Vendors Panel',
        path: '/vendor'
    });
};