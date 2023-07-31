const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


// ---------------------------------------------------------------------

const {router: adminRoutes } = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const { get404 } = require('./controllers/errorController.js');
const authRoutes = require('./routes/auth.js');

const User = require('./models/User.js');

const _env = require('./util/env_loader.js');

const appEnv = '_development';

// ---------------------------------------------------------------------
           
const app = express();
const myStore = new MongoDBStore({
    uri: _env.MONGOOSE_CONNECTION,
    collection: 'mySessions',
    expires: 1000 * 60 * 60 * 24,   // -- 1 days in milliseconds
});
            

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
app.set('layout', 'layouts/app');

// ---------------------------------------------------------------------



app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: '45983685-df47-4c65-bdca-41cbdf224576', 
    resave: false,
    saveUninitialized: false,
    // cookie: {maxAge: null},
    store: myStore
}));

// ---------------------------------------------------------------------

app.use(async (req, res, next) => {
    try {
        if (!req.session?.user) {          
            return next();
        }

        const user = await User.findById(req.session.user._id);  
        
        req.user = user;
          
        next();

    } catch (err) {
        console.info('! 123456 !');
        console.error(err);
    }
})

// ---------------------------------------------------------------------

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);




// ---------------------------------------------------------------------
app.use(get404);
// ---------------------------------------------------------------------




(async ()=>{

    try {       

        const result = await mongoose.connect(_env.MONGOOSE_CONNECTION);
        const user = await User.findOne();
        
        if (!user) {
            const useruser = new User({
                username:'chrismariojimmy', 
                email:'chris12aug"yahoo.com', 
                password:'secrete',
                cart: {
                    items: []
                }
            });
    
            useruser.save();
        }

        
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

