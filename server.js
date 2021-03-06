const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) )

hbs.registerPartials( __dirname + '/views/partials' );
app.set('view engine', 'hbs');

app.get('/', (req,res) => {
    
    res.render('home',{
        nombre: 'Martin'
    });

});
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'Martin'
    });

});
app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});