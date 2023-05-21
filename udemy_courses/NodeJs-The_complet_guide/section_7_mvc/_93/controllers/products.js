const products = [];

exports.getAddProduct = function(req, res, next) {
 
    res.render('add-product', {
        pageTitle: 'Products', 
        path: '/admin/add-product', 
        productCSS: true, 
        activeAddProduct: true
    });
}

exports.postAddProduct = function(req, res, next) {
    
    console.log('->',req.body);
    products.push({ title: req.body.title });
    res.redirect('/');

}
// ---------------------------------------------------------------------

exports.getProducts = function (req, res, next) {

    console.log('shop.js ->', products);
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/shop', 
        hasProducts: products.length > 0, 
        formsCSS: true,
        activeShop:true,
     });
}