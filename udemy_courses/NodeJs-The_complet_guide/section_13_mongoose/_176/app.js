const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const path = require('path');
const mongoose = require('mongoose');


// ---------------------------------------------------------------------

const {router: adminRoutes } = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const { get404 } = require('./controllers/errorController.js');

const User = require('./models/User.js');

const _env = require('./util/env_loader.js');

const appEnv = '_development';

// ---------------------------------------------------------------------

// const { mongodbClient, getMongodbClient, getDb } = require('./util/database.js');
// const User = require('./models/User.js');

// ---------------------------------------------------------------------




// ---------------------------------------------------------------------
            
const app = express();
            

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
app.set('layout', 'layouts/app');



// ---------------------------------------------------------------------

app.use(async (req, res, next) => {
    try {
        const user = await User.findById('64aec671e6b1802d6726312b');   

        req.user = user 
          
        next();

    } catch (err) {
        console.info('! 123456 !');
        console.error(err);
    }
})

// ---------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// ---------------------------------------------------------------------

app.use(get404);
// ---------------------------------------------------------------------



// (async ()=>{
//     let mongodbClient = await getMongodbClient()
//     try {       
//         await mongodbClient.connect();
//         console.log('-> MongoDb Client connected successfully');
        
//         app.listen(3000, '0.0.0.0', ()=>{
//             console.log('-> Express listen on port 3000');
//         });

//     } catch (error) {
//         console.info('! init !');
//         console.log(error)
//     } finally {
//         // await mongodbClient.close();
//     }
// })();

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
        });

    } catch (error) {
        console.info('! init !');
        console.log(error)
    } finally {
        // await mongodbClient.close();
    }
})();

