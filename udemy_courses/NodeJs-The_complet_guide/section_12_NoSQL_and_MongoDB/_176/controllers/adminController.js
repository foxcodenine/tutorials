const Product = require('../models/Product');

// ---------------------------------------------------------------------

exports.getProducts = async function(req, res, next) {
 
    /// -- TODO: get all products.

    res.render('admin/products', {
        prods: products, 
        pageTitle: 'Admin Products', 
        path: '/admin/products', 
     });
}

// ---------------------------------------------------------------------

exports.getAddProduct = function(req, res, next) {
 
    res.render('admin/edit-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product', 
        editing: false,
    });
}

exports.postAddProduct = async function(req, res, next) {

    try {
        const title = req.body.title;
        const imageUrl = req.body.imageUrl;
        const description = req.body.description;
        const price = req.body.price;
        const id = req.body.id;

        // -- TODO: add product to db.

        const product = new Product(title, price, description, imageUrl);
        await product.save();
        // https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A512%2F1*doAg1_fMQKWFoub-6gwUiQ.png&tbnid=ZfB58wYgeVBicM&vet=12ahUKEwjnwo7r697_AhUshf0HHb0oClAQMygLegUIARD3AQ..i&imgrefurl=https%3A%2F%2Fmedium.com%2Ffree-code-camp%2Flearn-mongodb-a4ce205e7739&docid=8J1XRDQHNCSm-M&w=512&h=512&q=mongodb&ved=2ahUKEwjnwo7r697_AhUshf0HHb0oClAQMygLegUIARD3AQ
        

        res.redirect('/admin-product');
    } catch (err) {
        console.info('! postAddEditProduct !')
        console.error(err)
    }
}



// ---------------------------------------------------------------------

exports.getEditProduct = async function(req, res, next) {

    // const editMode = req.query.edit;
    // if (!editMode) { return res.redirect('/') };

    // const prodId = req.params.productId;

    // const product = (await req.user.getProducts({ where: {id: prodId} }))[0]

    // if (!product) { return res.redirect('/') };

    // res.render('admin/edit-product', {
    //     pageTitle: 'Edit Product', 
    //     path: '/admin/edit-product', 
    //     editing: editMode,
    //     product
    // });
}

exports.postEditProduct = async function(req, res, next) {

    // try {    
    //     const id = req.body.id;
        
    //     const product = await Product.findByPk(id);

        
    //     product.title = req.body.title;
    //     product.imageUrl = req.body.imageUrl;
    //     product.description = req.body.description;
    //     product.price = req.body.price;

    //     await product.save();
    //     console.log('Update Product')

    //     res.redirect('/');
    // } catch (err) {
    //     console.info('! postAddEditProduct !')
    // }
}

// ---------------------------------------------------------------------

exports.postDeleteProduct = async function(req, res, next) {
 
//     let productId = req.body.id;
    
//     // await (Product.findByPk(productId)).destroy();     
//     // await Product.destroy({where: {id: productId} });     

//     const product = (await req.user.getProducts({where: {id: productId } }))[0];
//     product.destroy();

//     res.redirect('/admin/products');
}

exports.postResetProducts = async function(req, res, next) {
    // const products = await Product.loadFromFile();

    // products.forEach(async (p) => {
    //     delete p.id;
    //     return await req.user.createProduct({ ...p });
    // });

    // setTimeout(()=>{
    //     res.redirect('/');
    // }, 500)
}
// ---------------------------------------------------------------------