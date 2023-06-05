
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const path = require('path');

// ---------------------------------------------------------------------

const {router: adminRoutes } = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const {get404} = require('./controllers/errorController.js');

// ---------------------------------------------------------------------

const db = require('./config/database.js');





(async () => {
    try {

        let sql =  'CREATE TABLE if not exists products('
            sql += 'id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,';    
            sql += 'title VARCHAR(255) NOT NULL,';    
            sql += 'price DOUBLE NOT NULL,';    
            sql += 'description TEXT NOT NULL,';    
            sql += 'imageUrl VARCHAR(255) NOT NULL';    
            sql += ')';
        let result = await db.execute(sql);
        console.log(result)

        sql =  'SELECT * FROM products';

        result = await db.execute(sql);
        console.log(result[1])
    }
    catch (error) {
        console.error(error)
    }
    
})();
// ---------------------------------------------------------------------

const app = express();




app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(expressLayouts);
app.set('layout', 'layouts/app');

// ---------------------------------------------------------------------

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// ---------------------------------------------------------------------

app.use(get404);
// ---------------------------------------------------------------------


// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000)