exports.getIndex = (req, res, next) => {
    const vendors = [{
            id: 1,
            name: 'Vendore 1',
            slug: 'vendor-1',
            imageUrl: 'img/adidas.jpeg',
            products: []
        },
        {
            id: 1,
            name: 'Vendore 2',
            slug: 'vendor-1',
            imageUrl: 'img/adidas.jpeg',
            products: []
        },
        {
            id: 1,
            name: 'Vendore 3',
            slug: 'vendor-1',
            imageUrl: 'img/adidas.jpeg',
            products: []
        },
        {
            id: 1,
            name: 'Vendore 4',
            slug: 'vendor-1',
            imageUrl: 'img/adidas.jpeg',
            products: []
        }
    ];
    res.render('index', {
        vendors,
        pageTitle: 'Vendors'
    });
};