const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer');



// ---------------------------------------------------------------------

const {router: adminRoutes } = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const { get404 , get500} = require('./controllers/errorController.js');
const authRoutes = require('./routes/auth.js');

const User = require('./models/User.js');

const _env = require('./util/env_loader.js');

const appEnv = '_development';

// ---------------------------------------------------------------------
 


// ---------------------------------------------------------------------


const app = express();
const myStore = new MongoDBStore({
    uri: _env.MONGOOSE_CONNECTION,
    collection: 'mySessions',
    expires: 1000 * 60 * 60 * 24,   // -- 1 days in milliseconds
});

const csrfProtection = csrf();
            

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
app.set('layout', 'layouts/app');

// ---------------------------------------------------------------------


app.use(bodyParser.urlencoded({ extended: true }));


const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        callback(null, `${new Date().toISOString()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, callback) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

// app.use(multer({dest: 'images'}).single('image_file'));
app.use(multer({
    storage: fileStorage, 
    fileFilter: fileFilter
}).single('image_file'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(session({
    secret: '45983685-df47-4c65-bdca-41cbdf224576', 
    resave: false,
    saveUninitialized: false,
    // cookie: {maxAge: null},
    store: myStore
}));

app.use(csrfProtection);     // <- this should be after init the session
app.use(flash());             // <- this should be after init the session

// ---------------------------------------------------------------------

app.use(async (req, res, next) => {
    try {
        if (!req.session?.user) {  return next(); }

        const user = await User.findById(req.session.user._id); 
        
        if (!user) {  return next(); }
        
        req.user = user;
        // throw new Error('Dummy!');
          
        next();

    } catch (err) {
        console.info('! 123456 !');

        const error = new Error(err)
        error.httpStatusCode = 500;
        return next(error);
        
    }
})

app.use(async (req, res, next) => {
    res.locals.isAuthenticated = req?.session?.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

// ---------------------------------------------------------------------

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);




// ---------------------------------------------------------------------
app.get('/500', get500);

app.use(get404);

app.use((error, req, res, next)=>{
    console.log('->', error.httpStatusCode)
    
    if (500 === error.httpStatusCode) {
        // res.redirect('/500')
        res.status(500).render('500', { pageTitle: 'Error', path: '/500', layout: false,});
    }
});
// ---------------------------------------------------------------------


(async ()=>{

    try {     
        
        
        const result = await mongoose.connect(_env.MONGOOSE_CONNECTION);
        // const user = await User.findOne();

        
        // if (!user) {
     
        //     const useruser = new User({

        //         email:'chris12aug"yahoo.com', 
        //         password:'secret',
        //         cart: {
        //             items: []
        //         }
        //     });
    
        //     useruser.save();
        // }

        
        app.listen(3000, '0.0.0.0', ()=>{
            console.log('-> Express listen on port 3000');
            console.log('http://localhost:3000')
        });

    } catch (error) {
        console.info('! init !');
        console.log(error)
    } finally {
        // await mongodbClient.close();
    }
})();

